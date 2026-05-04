import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.francolungwingchun.com",
      },
    ],
  },
};

export default nextConfig;
