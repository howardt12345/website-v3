const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
});
