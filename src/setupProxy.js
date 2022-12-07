const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
			"/api",
      createProxyMiddleware({
          target: 'http://43.201.61.99:12010/food',
          changeOrigin: true,
					pathRewrite:{
						'^/api':''
					}
      })
  )
};