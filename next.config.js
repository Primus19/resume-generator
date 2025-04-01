/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize output
  swcMinify: true,
  // Disable unnecessary features
  reactStrictMode: false,
  // Minimize output size
  compress: true,
  // Disable image optimization to save space
  images: {
    disableStaticImages: true,
    unoptimized: true
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Disable telemetry to save space
  experimental: {
    disableOptimizedLoading: false,
    optimizeCss: true
  }
}

module.exports = nextConfig
