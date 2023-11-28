/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"],
  },
  env: {
    PUBLIC_MONGODB_URI: process.env.PUBLIC_MONGODB_URI,
    USER_MONGODB_URI: process.env.USER_MONGODB_URI,
    PASSWORD_MONGODB_URI: process.env.PASSWORD_MONGODB_URI
  },
};

module.exports = nextConfig;
