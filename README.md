## qiankun项目实战

### 主应用

 1. 使用`vite、cra、ndk`等`cli`创建`React`项目作为主应用

 2. 安装`qiankun`  `yarn add qiankun `

 3. 创建`src/micro/index.js`文件，注册微应用并启动：

    ```javascript
    import NProgress from 'nprogress'
    import { start, registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
    
    /**
     * 注册微应用
     * 第一个参数 - 微应用的注册信息
     * 第二个参数 - 全局生命周期钩子
     */
    
    registerMicroApps([
      {
        name: 'MicroAppVue',
        entry: '//localhost:3100',
        container: '#container',
        activeRule: '/vue',
      },
      {
        name: 'MicroAppReact',
        entry: '//localhost:3200',
        container: '#container',
        activeRule: '/react',
      },
    ], {
      beforeLoad(app) {
        NProgress.start()
        console.log('before load', app.name)
        return Promise.resolve()
      },
      afterMount(app) {
        NProgress.done()
        console.log('after mount', app.name)
        return Promise.resolve()
      }
    })
    
    /**
     * 添加全局的未捕获异常处理器
     */
    addGlobalUncaughtErrorHandler(event => {
      console.error(event)
    })
    
    // 导出 qiankun 的启动函数
    export default start
    ```


4. 启动`qiankun`，在`src/main.js`添加如下代码

   ```javascript
   import startQiankun from "./micro";
   
   startQiankun();
   ```

   
### 微应用

1. 新增 `public-path.js` 文件，用于修改运行时的 `publicPath`

   ```javascript
   // src/public-path.js
   if (window.__POWERED_BY_QIANKUN__) {
     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
   }
   ```
   
2. 子应用建议使用 `history` 模式的路由，需要设置路由 `base`，值和它的 `activeRule` 是一样的

   ```javascript
   <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
   ```
   
3. 在入口文件最顶部引入 `public-path.js`，修改并导出三个生命周期函数

   ```javascript
   // main.js
   import './public-path';
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';
   
   // 渲染函数
   function render(props) {
     const { container } = props;
     ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
   }
   
   // 应用单独运行时
   if (!window.__POWERED_BY_QIANKUN__) {
     render({});
   }
   
   // 3个lifecycle
   export async function bootstrap() {
     console.log('micro react app bootstraped');
   }
   
   export async function mount(props) {
     console.log('micro props from main framework', props);
     render(props);
   }
   
   export async function unmount(props) {
     const { container } = props;
     ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
   }
   ```
   
4. 修改 `webpack` 打包，允许开发环境跨域和 `umd` 打包

   修`webpack`配置，安装`@rescripts/cli` 类似`react-app-rewired`
   
   `yarn add @rescripts/cli -D`
   
   根目录新增 `.rescriptsrc.js`
   
   ```javascript
   const { name } = require('./package');
   
   module.exports = {
     webpack: config => {
       config.output.library = `${name}-[name]`;
       config.output.libraryTarget = 'umd';
       config.output.jsonpFunction = `webpackJsonp_${name}`;
       config.output.globalObject = 'window';
   
       return config;
     },
   
     devServer: _ => {
       const config = _;
   
       config.headers = {
         'Access-Control-Allow-Origin': '*',
       };
       config.historyApiFallback = true;
       config.hot = false;
       config.watchContentBase = false;
       config.liveReload = false;
   
       return config;
     },
   };
   ```
   
   修改 `package.json`
   
   ```javascript
   -   "start": "react-scripts start",
   +   "start": "rescripts start",
   -   "build": "react-scripts build",
   +   "build": "rescripts build",
   -   "test": "react-scripts test",
   +   "test": "rescripts test",
   -   "eject": "react-scripts eject"
   
   ```
   
   