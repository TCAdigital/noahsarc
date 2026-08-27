import Image from "next/image";
import { redirect } from "next/navigation";

import LoginForm from "@/app/admin/login-form";
import { isSupabaseConfigured } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

/** Only same-origin admin paths may be used as a post-login destination. */
function safeRedirect(next: string | undefined): string {
  return next && /^\/admin(\/|$)/.test(next) ? next : "/admin/dashboard";
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  if (isSupabaseConfigured) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) redirect(safeRedirect(next));
  }

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden">
        <div className="bg-stone-900 p-10 text-center">
          <Image
            src="/images/logo.png"
            alt="Noah’s Arc Foundation"
            width={140}
            height={48}
            className="h-12 w-auto mx-auto mb-6 brightness-110"
          />
          <h1 className="text-white text-xl font-bold uppercase tracking-widest">
            Admin Access
          </h1>
          <p className="text-stone-500 text-xs mt-2 uppercase tracking-widest font-bold">
            Noah’s Arc CMS
          </p>
        </div>

        {isSupabaseConfigured ? (
          <LoginForm redirectTo={safeRedirect(next)} />
        ) : (
          <div className="p-10 space-y-4 text-sm text-stone-600 leading-relaxed">
            <p className="font-bold text-stone-900 uppercase text-xs tracking-widest">
              Supabase is not configured
            </p>
            <p>
              Create a <code className="text-amber-600">.env.local</code> from{" "}
              <code className="text-amber-600">.env.example</code> and set
              <code className="text-amber-600 block mt-2">
                NEXT_PUBLIC_SUPABASE_URL
              </code>
              <code className="text-amber-600 block">
                NEXT_PUBLIC_SUPABASE_ANON_KEY
              </code>
            </p>
            <p>
              Then run the SQL in{" "}
              <code className="text-amber-600">supabase/schema.sql</code> and
              restart the dev server. The public site keeps working meanwhile --
              it falls back to the content in{" "}
              <code className="text-amber-600">src/lib/data.ts</code>.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
