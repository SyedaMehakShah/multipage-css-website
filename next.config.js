
/** @type {import('next').NextConfig} */


// next.config.js
module.exports = {
  images: {
    domains: ['cakemeawayie.com', 'bellyfull.net', 'previews.123rf.com', 'images.squarespace-cdn.com', 'i.pinimg.com', 'img.freepik.com', 'preppykitchen.com', 'encrypted-tbn0.gstatic.com', 'thefirstyearblog.com'],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cakemeawayie.com',
      'bellyfull.net',
      'previews.123rf.com',
      'images.squarespace-cdn.com',
      'i.pinimg.com',
      'img.freepik.com',
      'preppykitchen.com',
      'encrypted-tbn0.gstatic.com',
      'thefirstyearblog.com',
    ],
  },
};

module.exports = nextConfig;
