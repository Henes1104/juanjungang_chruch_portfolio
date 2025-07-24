import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.ytimg.com'],
  },
  transpilePackages: ['@vercel/turbopack-next'],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.googlevideo.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: i.ytimg.com; media-src 'self' blob:; font-src 'self'; connect-src 'self' *.youtube.com *.googlevideo.com; frame-src 'self' www.youtube.com www.youtube-nocookie.com;"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
