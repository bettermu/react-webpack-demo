## 基于webpack4的 React全家桶 单页应用配置 项目骨架

### 如何运行

```
git clone

npm install

npm run build  //生产环境打包

npm run dev   //开发环境渲染
```

### 主要依赖
* 2018.11.18

  * webpack4 项目结构的主角
  * webpack-cli ：配合webpack4使用，必装
  * react全家桶 ：这个不多说了
  * babel编译包 ：ES6编译，用于es6语法向浏览器可识别运行的es5代码转换
  * clean-webpack-plugin ：每次打包前清除的插件
  * html-webpack-plugin ：html模板编译插件
  * webpack-dev-server ：开发环境本地服务
  * webpack-merge ：组合webpack配置的工具函数
  * sass less stylus等样式文件编译loader
    * 分别对应编译了 sass less stylus文件
  * 引入file-loader url-loader对静态资源图片等进行引入和打包
  

  * 完成tab选项卡的小示例（目前预览效果）   
  
  ![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/1.png?raw=true)

  * 整理路由代码，完成基本的页面跳转

  * 引入redux相关 进行状态管理

  * 引入redux-devtools对store状态树进行监控


  ### 关于在jsx里使用img标签引入图片的问题  

  实际上，我们写上如下的路径是无法解析成功的：
  ```html
  <img src="./img/avatar.jpg" />
  ```
    如上的路径，会原封不动打包到浏览器里，不会有任何效果，如果希望webpack按照实际打包的路径进行引用，就需要能够让webpack识别，也就是file-loader这个加载器识别，因此，需要按以下方式载入：
  ```js
  <img src={require('./img/avatar.jpg')} />
  ```
  这样，我们的file-loader模块便能识别，并按照引入路径打包入实际生成的文件。

  ### 关于如何在子组件中获取路由信息(withRouter的使用

  ```js
  import React,{Component} from 'react'
  import {withRouter} from 'react-router-dom'

  class App extends Component{
    ...
    render(){
      console.log(this.props)
      return(
        ...
      )
    }
  }

  export default withRouter(App)
  ```

  如上面代码,我们就可以在子组件的props中，获取到路由的相关信息。如图：  

  ![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/2.png?raw=true)

  当然，还有另一种写法,就是ES6的装饰器，@withRouter,可以极大的简化代码结构。步骤如下：

  首先，安装transform-decorators-legacy

  ```
  npm install transform-decorators-legacy --save-dev
  ```

  然后，记得在babelrc文件里加入如下的代码：

  ![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/3.png?raw=true)

  最后，修改上面的组件代码：

```js
  import React,{Component} from 'react'
  import {withRouter} from 'react-router-dom'

  @withRouter
  class App extends Component{
    ...
    render(){
      console.log(this.props)
      return(
        ...
      )
    }
  }

  export default App
  ```

  就可以顺利读取到路由信息了：

  ![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/2.png?raw=true)


  ### 打包报错，babel不识别...语法怎么办

  安装babel-plugin-transform-object-rest-spread：

  ```
  npm install babel-plugin-transform-object-rest-spread --save-dev
  ```

  接着，在babelrc文件的plugins里添加babel-plugin-transform-object-rest-spread插件，就可以了

  ![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/4.png?raw=true)



  ### 如何使用Redux-devtools监视Redux状态树的store

  具体使用方式，[本文](https://www.jianshu.com/p/a2d4c1856560)有讲解，按照步骤来就可以了；


在这里有个问题，就是，我们只是需要在开发环境里引用devtools，生产环境不想使用devtools，原来代码如下：

```js
//index.js
...
ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router />
      <DevTools />  //那么这里如何区分开开发环境和生产环境呢？
    </div>
  </Provider>
  
), document.getElementById('root'));
```
那么，上面的代码应该如何改造呢？

下面需要用到一个工具：cross-env，这个工具主要就是，能够让我们在代码里做出判断，识别出当前命令行所执行的具体环境参数，在package.json里这么设置：

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.conf.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
  },
```

那么，运行具体的命令，我们就能在代码里就可以通过 process.env.NODE_ENV 来访问到当前所在的环境，那么有了这个，我们就可以根据这个参数，来有条件的渲染devtools插件了,修改代码如下

```js
//index.js
...
const renderByEnv = env =>{
  if(env === 'development'){
    return(
      <Provider store={store}>
        <div>
          <Router />
          <DevTools />
        </div>
      </Provider>
    )
  } else {
    return(
      <Provider store={store}>
        <div>
          <Router />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render((
  renderByEnv(process.env.NODE_ENV) 
), document.getElementById('root'));
```

分别运行npm run dev和npm run build 可以看到区别：

开发环境:    

![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/5.png?raw=true)     

生产环境:   
    
![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/6.png?raw=true)














  




