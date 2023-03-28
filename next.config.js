/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
      domains: ["cdn.discordapp.com", "cdn.infinitybots.xyz"],
    },
    env: {
      MONGOOSE_URL: process.env.MONGOOSE_URL,
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      CLIENT_TOKEN: process.env.CLIENT_TOKEN,
      DEV_JWT_SECRET: process.env.DEV_JWT_SECRET,
      PROD_JWT_SECRET: process.env.PROD_JWT_SECRET
    },
  };