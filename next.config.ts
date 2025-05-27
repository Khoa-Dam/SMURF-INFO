import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
