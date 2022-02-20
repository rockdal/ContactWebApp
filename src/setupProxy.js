const { createProxyMiddleware } = require('http-proxy-middleware');
    
module.exports = function(app) {

app.use(
    '/getDetails', //this is your api
    createProxyMiddleware({
      target:'http://localhost:9000/Contact', //this is your whole endpoint link
      changeOrigin: true,
    })
  );  
};