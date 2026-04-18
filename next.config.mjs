import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Pages does not support Next.js server-side image optimization.
    // All product images are local static files — no quality impact.
    unoptimized: true,
  },
};

export default nextConfig;
