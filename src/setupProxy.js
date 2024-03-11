const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://intime-backend.onrender.com',
      changeOrigin: true,
    })
  );
};
