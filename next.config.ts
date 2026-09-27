import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/solutions/councils", destination: "/solutions/building-management", permanent: true }];
  },
};

export default nextConfig;
