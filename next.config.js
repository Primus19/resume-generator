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
  },
  // Reduce output size further
  output: 'standalone',
  // Disable webpack5 caching to save disk space
  webpack: (config, { dev, isServer }) => {
    // Reduce chunk size
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 20000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    };
    return config;
  }
}

module.exports = nextConfig
