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
    JWT_KEY: process.env.JWT_KEY,
    API_KEY: process.env.API_KEY,           
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,       
    PROJECT_ID: process.env.PROJECT_ID,        
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,    
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,            
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,    
  },
  api: {
    responseLimit: '8mb',
  }
};

module.exports = nextConfig;
