/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    cssChunking: false,
  },
};

export default nextConfig;
