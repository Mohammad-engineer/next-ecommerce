/** @type {import('next').NextConfig} */

const isStaticExport = "false";

const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
