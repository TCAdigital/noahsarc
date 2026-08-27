import { createClient as createSupabaseClient } from "@supabase/supabase-js";

import { requireSupabaseEnv } from "@/lib/env";

/**
 * Session-less client used to read published content. It never touches
 * cookies, which is what lets the reads run inside a cache scope.
 */
export function createPublicClient() {
  const { url, anonKey } = requireSupabaseEnv();
  return createSupabaseClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
