import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/cv/',
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true
};

export default nextConfig;
