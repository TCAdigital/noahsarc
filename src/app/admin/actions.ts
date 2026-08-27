"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import {
  SITE_CONTENT_ROW_ID,
  SITE_CONTENT_TABLE,
  SITE_CONTENT_TAG,
} from "@/lib/content";
import { defaultSiteContent } from "@/lib/data";
import { mergeContent } from "@/lib/merge-content";
import { createClient } from "@/lib/supabase/server";

export type SaveResult = { ok: true } | { ok: false; error: string };

/**
 * Persists the CMS draft.
 *
 * Server Actions are reachable by direct POST, so this re-checks the session
 * instead of trusting the proxy, and runs the payload through `mergeContent`,
 * which drops unknown keys and rejects values that do not match the schema.
 */
export async function saveSiteContent(payload: unknown): Promise<SaveResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { ok: false, error: "Your session has expired. Please sign in again." };
  }

  const content = mergeContent(defaultSiteContent, payload);

  const { error } = await supabase.from(SITE_CONTENT_TABLE).upsert({
    id: SITE_CONTENT_ROW_ID,
    content,
    updated_at: new Date().toISOString(),
    updated_by: user.id,
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  // Expire immediately rather than serving the previous copy once more.
  revalidateTag(SITE_CONTENT_TAG, { expire: 0 });
  revalidatePath("/", "layout");

  return { ok: true };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin");
}
