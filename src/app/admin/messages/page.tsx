import { ArrowLeft, Check, Inbox, RotateCcw } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { setMessageHandled } from "@/app/admin/messages/actions";
import { CONTACT_MESSAGES_TABLE } from "@/lib/contact";
import { createClient } from "@/lib/supabase/server";

type ContactMessage = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  handled: boolean;
};

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
});

export default async function AdminMessages() {
  await connection();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin");

  const { data, error } = await supabase
    .from(CONTACT_MESSAGES_TABLE)
    .select("id, created_at, name, email, message, handled")
    .order("created_at", { ascending: false })
    .limit(200);

  const messages = (data ?? []) as ContactMessage[];

  return (
    <main className="min-h-screen bg-stone-50 p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 transition font-bold text-[10px] uppercase tracking-widest mb-8"
        >
          <ArrowLeft size={14} /> Back to the editor
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-2 tracking-tight">
            Messages
          </h1>
          <p className="text-stone-400 text-sm">
            Sent through the Contact Us form.
          </p>
        </header>

        {error && (
          <p className="bg-red-50 text-red-600 text-xs font-bold p-5 rounded-2xl border border-red-100 mb-8">
            Could not load messages: {error.message}
          </p>
        )}

        {!error && messages.length === 0 && (
          <div className="bg-white border border-stone-100 rounded-[2rem] p-16 text-center">
            <Inbox className="text-stone-300 mx-auto mb-4" size={40} />
            <p className="text-stone-400 text-sm">No messages yet.</p>
          </div>
        )}

        <ul className="space-y-4">
          {messages.map((item) => (
            <li
              key={item.id}
              className={`bg-white p-8 rounded-[2rem] border shadow-sm ${
                item.handled ? "border-stone-100 opacity-60" : "border-stone-200"
              }`}
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                <div>
                  <p className="font-bold text-stone-900">{item.name}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-sm text-emerald-700 hover:underline break-all"
                  >
                    {item.email}
                  </a>
                </div>
                <time
                  dateTime={item.created_at}
                  className="text-[10px] font-bold uppercase tracking-widest text-stone-400"
                >
                  {DATE_FORMAT.format(new Date(item.created_at))}
                </time>
              </div>

              <p className="text-stone-600 leading-relaxed whitespace-pre-wrap mb-6">
                {item.message}
              </p>

              <form action={setMessageHandled}>
                <input type="hidden" name="id" value={item.id} />
                <input
                  type="hidden"
                  name="handled"
                  value={String(!item.handled)}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-emerald-700 transition"
                >
                  {item.handled ? (
                    <>
                      <RotateCcw size={14} /> Mark as pending
                    </>
                  ) : (
                    <>
                      <Check size={14} /> Mark as handled
                    </>
                  )}
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
