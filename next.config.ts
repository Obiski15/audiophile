import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dm5t6k3ks/image/upload/**",
      },
    ],
  },
}

export default nextConfig
