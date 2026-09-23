"use server";

import {
  CONTACT_LIMITS,
  CONTACT_MESSAGES_TABLE,
  type ContactState,
} from "@/lib/contact";
import { isSupabaseConfigured } from "@/lib/env";
import { createPublicClient } from "@/lib/supabase/public";

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Receives a Contact Us submission.
 *
 * Messages are stored in Supabase and read back in the CMS; only the accounts
 * listed in `site_admins` can see them. Validation runs here because a Server
 * Action is reachable by direct POST, not only through the form.
 */
export async function submitContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Hidden field: a real visitor never fills it in, a naive bot fills in
  // everything. Answer normally so the bot has nothing to learn from.
  if (field(formData, "website")) {
    return { status: "success" };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const message = field(formData, "message");

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email address, and message.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return {
      status: "error",
      message: "Please check your email address and try again.",
    };
  }

  if (
    name.length > CONTACT_LIMITS.name ||
    email.length > CONTACT_LIMITS.email ||
    message.length > CONTACT_LIMITS.message
  ) {
    return {
      status: "error",
      message: "That message is too long. Please shorten it and try again.",
    };
  }

  if (!isSupabaseConfigured) {
    console.error("[contact] Supabase is not configured; message not stored.");
    return {
      status: "error",
      message:
        "We could not send your message right now. Please email us directly instead.",
    };
  }

  const { error } = await createPublicClient()
    .from(CONTACT_MESSAGES_TABLE)
    .insert({ name, email, message });

  if (error) {
    console.error("[contact] could not store message:", error.message);
    return {
      status: "error",
      message:
        "We could not send your message right now. Please email us directly instead.",
    };
  }

  return { status: "success" };
}
