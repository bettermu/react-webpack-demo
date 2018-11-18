const path = require('path')

const APP_PATH = path.resolve(__dirname,'../src')
const DIST_PATH = path.resolve(__dirname,'../dist')

module.exports = {
  entry:{
    app:'./src/index.js',
    framework: ['react','react-dom'], //用来代码分割
  },
  output:{
    filename:'js/bundle.js',
    path:DIST_PATH
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:'babel-loader',
        include:APP_PATH
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader'  //在html中插入style标签
          },
          {
            loader:'css-loader'
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:[   //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers:['last 5 version']
                })
              ]
            }
          }
        ]
      },

      //less预编译处理
      {
        test:/\.less$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:[   //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers:['last 5 version']
                })
              ]
            }
          },
          {
            loader:'less-loader'
          }

        ]
      },

      //scss预编译处理
      {
        test:/\.scss$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'sass-loader'
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:[   //自动添加浏览器前缀
                require('autoprefixer')({
                  browsers:['last 5 version']
                })
              ]
            }
          },
        ]
      }
    ]
  }
}