import { redirect } from "next/navigation";
import { connection } from "next/server";

import ContentEditor from "@/app/admin/dashboard/content-editor";
import { getSiteContentDraft } from "@/lib/content";
import { defaultSiteContent } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  // The CMS is per-user and always live, so it is never prerendered.
  await connection();

  // The proxy already redirected anonymous visitors; this is the authoritative
  // check, close to the data it protects.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin");

  const content = await getSiteContentDraft();

  return (
    <ContentEditor
      initial={content}
      defaults={defaultSiteContent}
      userEmail={user.email ?? ""}
    />
  );
}
