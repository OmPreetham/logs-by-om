/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add PWA support
  headers: async () => {
    return [
      {
        source: '/manifest.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
