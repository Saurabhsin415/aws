 
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
    API_URL:"https://backend.nutracharm.in/api",
    URL:"https://nutracharm.com/",
    API_URL2:"https://matka.gyaniarticle.com/",

  },
 };
