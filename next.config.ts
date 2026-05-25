import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 82, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
      },
    ],
  },
};

export default nextConfig;
