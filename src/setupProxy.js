const {createProxyMiddleware} = require('http-proxy-middleware');
  
module.exports = function(app){ 
    app.use(
    "/api" ,                         /* target을 담을 문자열 변수 */
    createProxyMiddleware({
        target:"http://openapi.seoul.go.kr:8088/",    /* 접속할 api url */ 
        changeOrigin:true,
        pathRewrite:{
        '^/api':''
        }
    })
    )
};