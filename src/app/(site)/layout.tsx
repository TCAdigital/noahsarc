import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSiteContent } from "@/lib/content";

const SITE_URL = "https://noahsarc.org";

export async function generateMetadata(): Promise<Metadata> {
  const { hero } = await getSiteContent();
  const title = `Noah’s Arc Organization | ${hero.title}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: hero.description,
    keywords: [
      "Noah’s Arc Organization",
      "Kyenjojo",
      "Uganda",
      "sponsor a child",
      "orphans and vulnerable children",
      "education fund",
    ],
    openGraph: {
      type: "website",
      url: SITE_URL,
      title,
      description: hero.description,
      images: [hero.backgroundImage],
    },
  };
}

/** Chrome shared by every public page: top bar, nav, footer, WhatsApp button. */
export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { topBar, footer } = await getSiteContent();

  return (
    <>
      <TopBar topBar={topBar} />
      <Navbar logo={footer.logo} />
      {children}
      <Footer footer={footer} topBar={topBar} />
      <WhatsAppButton phone={topBar.phone} />
    </>
  );
}
