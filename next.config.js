/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  images: {
    domains: [
      "cdn.dribbble.com",
      "images.pexels.com",
      "i.imgur.com",
      "imgur.com",
    ],
  },
  env: {
    PUBLIC_MONGODB_URI: process.env.PUBLIC_MONGODB_URI,
    USER_MONGODB_URI: process.env.USER_MONGODB_URI,
    PASSWORD_MONGODB_URI: process.env.PASSWORD_MONGODB_URI,
    KEY_TO_POST: process.env.KEY_TO_POST,
    SEND_API_KEY: process.env.SEND_API_KEY,
    JWT_KEY: process.env.JWT_KEY,
    TOKEN_CONFIGS: process.env.TOKEN_CONFIGS,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    URI_PROD: process.env.URI_PROD,
    URI_DEV: process.env.URI_DEV,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
