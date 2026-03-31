import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.theskintoloveclinic.co.uk",
      },
      {
        protocol: "https",
        hostname: "skintolovecommunity.co.uk",
      },
    ],
  },
};

export default nextConfig;
