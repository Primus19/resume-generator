/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize output
  swcMinify: true,
  // Disable unnecessary features
  reactStrictMode: false,
  // Minimize output size
  compress: true,
  // Configure for static export
  output: 'export',
  // Ensure images work in static export
  images: {
    unoptimized: true
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Disable telemetry
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
