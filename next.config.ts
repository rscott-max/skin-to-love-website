import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'theskintoloveclinic.co.uk',
      },
    ],
  },
};

export default nextConfig;
