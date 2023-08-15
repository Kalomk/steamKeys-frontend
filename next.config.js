/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    mongoDB: process.env.MONGO_DB, // Pass through env variables
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
