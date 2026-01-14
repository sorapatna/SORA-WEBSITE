const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    modern: true,
    polyfillsOptimization: true
  },
  swcMinify: true,
  transpilePackages: []
};

export default nextConfig;