import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@bil/shared"],
  serverExternalPackages: ["knex", "mysql2"],
};

export default nextConfig;
