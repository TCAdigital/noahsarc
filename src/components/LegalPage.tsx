import type { ReactNode } from "react";

/**
 * Shared shell for the privacy, cookie and terms pages: a plain, readable
 * column with no decoration competing with the text.
 */
export default function LegalPage({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl legal-body">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-12">
              Last updated: {lastUpdated}
            </p>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
