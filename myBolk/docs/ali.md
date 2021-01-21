## koa

1.koa必须是有koa-bodyparser 这个中间件才能通过ctx.request.body拿到post传来的Json对象	

## react

1.解决跨域

安装http-proxy-middleware，下面两种都可。



```
yarn add http-proxy-middleware  //npm install http-proxy-middleware -D
```

在'src'目录下新建'setupProxy.js'文件并写入以下代码（注意第二行注释）



```js
const {createProxyMiddleware} = require('http-proxy-middleware');//1.0.0版本前都是用proxy,1.0.0后使用porxy会报错,应使用createProxyMiddleware;
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
          '/api',
          {
            target: 'http://localhost:7001',
            pathRewrite: {'^/api' : ''},
            changeOrigin: true,     // target是域名的话，需要这个参数，
            secure: false,    
          }
      )
  );
};
```