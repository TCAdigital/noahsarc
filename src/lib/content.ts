import { unstable_cache } from "next/cache";

import { defaultSiteContent, type SiteContent } from "@/lib/data";
import { isSupabaseConfigured } from "@/lib/env";
import { mergeContent } from "@/lib/merge-content";
import { createPublicClient } from "@/lib/supabase/public";

/** Cache tag invalidated by the CMS whenever content is saved. */
export const SITE_CONTENT_TAG = "site-content";

/** The site is single-tenant, so all content lives in one row. */
export const SITE_CONTENT_ROW_ID = "default";

export const SITE_CONTENT_TABLE = "site_content";

async function fetchStoredContent(): Promise<unknown> {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await createPublicClient()
    .from(SITE_CONTENT_TABLE)
    .select("content")
    .eq("id", SITE_CONTENT_ROW_ID)
    .maybeSingle();

  if (error) {
    // Never take the site down over a CMS outage -- fall back to the defaults.
    console.error("[content] could not read site content:", error.message);
    return null;
  }

  return data?.content ?? null;
}

/**
 * Published content for the public site. Cached until the CMS saves, with a
 * five minute ceiling so an out-of-band edit in Supabase still shows up.
 */
export const getSiteContent = unstable_cache(
  async (): Promise<SiteContent> =>
    mergeContent(defaultSiteContent, await fetchStoredContent()),
  ["site-content"],
  { tags: [SITE_CONTENT_TAG], revalidate: 300 },
);

/** Uncached read, so the CMS always edits the current row. */
export async function getSiteContentDraft(): Promise<SiteContent> {
  return mergeContent(defaultSiteContent, await fetchStoredContent());
}
