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
  * 关于在jsx里使用img标签引入图片的问题，实际上，我们写上如下的路径是无法解析成功的：
  ```html
  <img src="./img/avatar.jpg" />
  ```
    如上的路径，会原封不动打包到浏览器里，不会有任何效果，如果希望webpack按照实际打包的路径进行引用，就需要能够让webpack识别，也就是file-loader这个加载器识别，因此，需要按以下方式载入：
  ```js
  <img src={require('./img/avatar.jpg')} />
  ```
  这样，我们的file-loader模块便能识别，并按照引入路径打包入实际生成的文件。

  * 完成tab选项卡的小示例（目前预览效果）   
  
  ![](https://github.com/bettermu/blog-picture-store/blob/master/react-webpack-demo/1.png?raw=true)




  




