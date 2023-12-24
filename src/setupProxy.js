const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://suitmedia-backend.suitdev.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
      onProxyReq: (proxyReq) => {
        // Tambahkan parameter ke URL permintaan
        const params = {
          'page[number]': 1,
          'page[size]': 10,
          append: ['small_image', 'medium_image'],
          sort: '-published_at',
        };

        const queryString = Object.entries(params)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');

        if (queryString) {
          proxyReq.path += `?${queryString}`;
        }
      },
    })
  );
};
