import Image, { type ImageProps } from "next/image";

/**
 * Remote hosts the optimiser is allowed to fetch from. Keep in sync with
 * `images.remotePatterns` in `next.config.ts`.
 */
const OPTIMISABLE_HOSTS = new Set(["i.imgur.com", "images.unsplash.com"]);

function isOptimisable(src: string): boolean {
  if (src.startsWith("/")) return true;
  try {
    return OPTIMISABLE_HOSTS.has(new URL(src).hostname);
  } catch {
    return false;
  }
}

type SiteImageProps = Omit<ImageProps, "src"> & { src: string };

/**
 * `next/image` for CMS-provided sources. Editors can paste a URL from any host,
 * so images the optimiser is not configured for are served as-is instead of
 * failing the request.
 */
export default function SiteImage({ src, alt, ...props }: SiteImageProps) {
  if (!src) return null;

  return (
    <Image src={src} alt={alt} unoptimized={!isOptimisable(src)} {...props} />
  );
}
