/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com", "images.pexels.com"]
  },
  env: {
    PUBLIC_MONGODB_URI: process.env.PUBLIC_MONGODB_URI,
    USER_MONGODB_URI: process.env.USER_MONGODB_URI,
    PASSWORD_MONGODB_URI: process.env.PASSWORD_MONGODB_URI,
    GA_KEY: process.env.GA_KEY,
    KEY_TO_POST: process.env.KEY_TO_POST,
    KEY_USER: process.env.KEY_USER,
  },
  api: {
    responseLimit: '8mb',
  }
};

module.exports = nextConfig;
