/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
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
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },
  /* config options here */
};

module.exports = nextConfig;
