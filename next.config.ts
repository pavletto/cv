import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',
  reactStrictMode: false,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PATH || '',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  webpack: (config, { isServer }) => {
    // Удаляем Webpack-бандлы, если нет серверного кода
    if (!isServer) {
      config.resolve.fallback = {};
    }
    return config;
  },
};

export default nextConfig;
