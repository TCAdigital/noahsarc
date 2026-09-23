"use server";

import { revalidatePath } from "next/cache";

import { CONTACT_MESSAGES_TABLE } from "@/lib/contact";
import { createClient } from "@/lib/supabase/server";

/**
 * Flags a message as dealt with. Like every admin action this re-checks the
 * session, because Server Actions are reachable by direct POST.
 */
export async function setMessageHandled(formData: FormData) {
  const id = formData.get("id");
  const handled = formData.get("handled") === "true";

  if (typeof id !== "string") return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from(CONTACT_MESSAGES_TABLE)
    .update({ handled })
    .eq("id", id);

  if (error) {
    console.error("[messages] could not update message:", error.message);
    return;
  }

  revalidatePath("/admin/messages");
}
