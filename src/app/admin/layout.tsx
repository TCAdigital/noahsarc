import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noah’s Arc CMS",
  robots: { index: false, follow: false },
};

/** The CMS deliberately renders without the public site chrome. */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
