"use client";

import { Search, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import SiteImage from "@/components/SiteImage";

type GalleryLightboxProps = {
  title: string;
  images: string[];
  /** How many photos to show before the visitor expands the grid. */
  featuredCount?: number;
};

export default function GalleryLightbox({
  title,
  images,
  featuredCount = 4,
}: GalleryLightboxProps) {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = showAll ? images : images.slice(0, featuredCount);
  const hasMore = images.length > featuredCount;

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, step]);

  return (
    <section id="gallery" className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {visible.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`Open photo ${index + 1} of ${visible.length}`}
            className="h-64 md:h-80 overflow-hidden relative group cursor-pointer"
          >
            <SiteImage
              src={image}
              alt=""
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <Search className="text-white" size={32} />
            </span>
          </button>
        ))}
      </div>

      <div className="gallery-banner py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <h2 className="text-white text-2xl md:text-3xl font-light tracking-wide text-center md:text-left">
            {title}
          </h2>
          {hasMore && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="border-2 border-white text-white px-8 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#5d4e9d] transition duration-300"
            >
              {showAll ? "Show less" : "View Gallery"}
            </button>
          )}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition"
            onClick={() => setOpenIndex(null)}
          >
            <X size={36} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <SiteImage
              src={visible[openIndex]}
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {visible.length > 1 && (
            <div className="absolute bottom-10 flex items-center gap-6 text-white text-xs font-bold uppercase tracking-[0.3em]">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="hover:text-amber-500 transition"
              >
                Prev
              </button>
              <span className="text-white/50">
                {openIndex + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="hover:text-amber-500 transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
