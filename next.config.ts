import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.ytimg.com'],
  },
  transpilePackages: ['@vercel/turbopack-next'],
  /* config options here */
};

export default nextConfig;
