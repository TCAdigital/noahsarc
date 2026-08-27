/**
 * Supabase credentials. The public site renders fine without them (it falls
 * back to the content checked into `lib/data.ts`), but the CMS cannot, so the
 * admin paths call `requireSupabaseEnv()` and fail loudly instead of silently
 * talking to a placeholder project.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export function requireSupabaseEnv(): { url: string; anonKey: string } {
  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY (see .env.example).",
    );
  }
  return { url, anonKey };
}
