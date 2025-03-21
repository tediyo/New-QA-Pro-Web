// next.config.js
// module.exports = {
//   images: {
//     domains: ['randomuser.me'], // Add the domain where the image is hosted
//   },
  
    
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cryptodaily.co.uk",
      },
    ],
  },
};

module.exports = nextConfig;
