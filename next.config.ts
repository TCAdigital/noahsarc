import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The images in `public/images` are already resized and compressed by
    // `scripts/optimize-images.mjs`, so the hosting optimiser would only
    // repeat work we have done. Turning it off also keeps the site off the
    // image-transformation quota, which was returning 402 in production.
    unoptimized: true,
    // These patterns only exist so that image URLs typed into the CMS keep
    // working; anything outside this list is rendered as-is by `<SiteImage>`.
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
