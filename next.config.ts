import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every asset the site ships with lives in `public/images`. These patterns
    // only exist so that image URLs typed into the CMS keep working; anything
    // outside this list is rendered unoptimised by `<SiteImage>`.
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
