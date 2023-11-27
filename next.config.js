/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"], 
  },
  env: {
    NEXT_PUBLIC_MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
  }
};

module.exports = nextConfig