const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evkllyb9cceqvs1z.public.blob.vercel-storage.com',
      },
    ],
  },
};

module.exports = nextConfig;
