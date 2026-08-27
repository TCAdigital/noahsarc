import { createBrowserClient } from "@supabase/ssr";

import { requireSupabaseEnv } from "@/lib/env";

/** Supabase client for Client Components. Writes the session to cookies. */
export function createClient() {
  const { url, anonKey } = requireSupabaseEnv();
  return createBrowserClient(url, anonKey);
}
