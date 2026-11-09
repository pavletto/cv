import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',
  reactStrictMode: false,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
