import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Noah's Arc Foundation | With your help, we can change the life stories of many childrens",
  description: "Please do not wait to get involved with this incredible opportunity for these children. Please continue to consider and spread to word about the opportunity to sponsor children and give them a supported future!",
  keywords: "Noah's Arc Foundation, Joakim Noah, youth empowerment, art therapy, sports for kids, drop of consciousness, Chicago youth programs",
  openGraph: {
    type: "website",
    url: "https://noahsarc.org/",
    title: "Noah's Arc Foundation | With your help, we can change the life stories of many childrens",
    description: "Please do not wait to get involved with this incredible opportunity for these children. Please continue to consider and spread to word about the opportunity to sponsor children and give them a supported future!",
    images: ["https://i.imgur.com/Q9ytvOn.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
