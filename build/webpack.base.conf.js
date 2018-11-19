const path = require('path')

const resolve = dir => path.resolve(__dirname,dir)

const APP_PATH = resolve('../src')
const DIST_PATH = resolve('../dist')



module.exports = {
  entry: {
    app: './src/index.js',
    framework: ['react', 'react-dom'], //用来代码分割
  },
  output: {
    filename: 'js/bundle.js',
    path: DIST_PATH
  },
  //配置模块如何被解析
  resolve:{
    //从左往右依次执行自动添加解析后缀
    extensions:['.js','.jsx','.json'],

    //配置别名
    alias:{
      'components':resolve('../src/components'),
      'src':resolve('../src'),
      'views':resolve('../src/views')
    }
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: APP_PATH
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader' //在html中插入style标签
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ]
            }
          }
        ]
      },

      //less预编译处理
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ]
            }
          },
          {
            loader: 'less-loader'
          }

        ]
      },

      //scss预编译处理
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ]
            }
          },
        ]
      },

      //stylus样式预编译
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader:'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ]
            }
          },
          {
            loader:'stylus-loader'
          }
        ]
      },

      //文件加载file-loader
      //{
      //  test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
      //  use: 'url-loader?limit=8129', 
      //  //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
      //  exclude: /node_modules/
      //},

      {
        test: /\.(svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            //name:'img/[name].[hash:7].[ext]',
            outputPath: 'assets/',
            publicPath: './assets/'
          }
        }],

      },
      //{// 配置html里引用图片
      //  test: /\.html$/i,
      //  use: 'html-withimg-loader'
      //},
    ]
  }
}