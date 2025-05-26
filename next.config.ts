import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      colors: {
        "brand-light": "#FFDFBF",
        "brand-orange": "#F6891E",
      },
    },
  },
};

export default nextConfig;
