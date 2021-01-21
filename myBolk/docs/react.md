## react 

### 1 css 模块化 create-react-app自动有sass和css



 ```js

   module: {    rules: [       { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] },*//打包处理 scss 文件的loader* 
 ```



先 run eject 然后在webpack配置 

`modules` 参数是启用模块化！
注2： `localIdentName` 参数是自定义模块化的类



## 2.react-router

```js
<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
></Router>
```

Router 里面的Route是路由设置 Router 标签必须在app最外层，这样子才能包裹所有的Route标签对应路由渲染什么组件。