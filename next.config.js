/**
 * Next.js Configuration
 */
const nextConfig = require('next-optimized-images')

module.exports = nextConfig({
  // Next Optimized Images

  // Next.js
  reactStrictMode: true,
  images: {
    loader: 'custom',
    disableStaticImages: true
  }
})
