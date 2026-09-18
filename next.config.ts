import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'gargipaperkraft.com',
          },
        ],
        destination: 'https://www.gargipaperkraft.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
