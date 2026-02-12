import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
  },
  images: {
    remotePatterns: [new URL('https://cdn.nonick-mc.com/**')],
  },
};

export default nextConfig;
