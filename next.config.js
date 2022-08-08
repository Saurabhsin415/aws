 
module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        '@sentry': {
          test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
          name: '@sentry',
          priority: 10,
          reuseExistingChunk: false,
        },
      };
    }
  
    return config;
  },
  
  env: {
    API_URL:"https://api.xn--sattmatka-t1a.com/api/",
    URL:"https://api.xn--sattmatka-t1a.com/api/",
    API_URL2:"https://api.xn--sattmatka-t1a.com",

  },
 };
