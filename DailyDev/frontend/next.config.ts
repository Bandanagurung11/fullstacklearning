import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],  // Allow images from Unsplash
  },
  /* config options here */
};

export default nextConfig;
