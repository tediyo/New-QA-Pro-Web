// // next.config.js
// // module.exports = {
// //   images: {
// //     domains: ['randomuser.me'], // Add the domain where the image is hosted
// //   },
  
    
// // }
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         domains: ['randomuser.me'],
//         protocol: "https",
//         hostname: "images.cryptodaily.co.uk",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me', // Correct hostname
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'images.cryptodaily.co.uk', // Correct hostname for this source
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
