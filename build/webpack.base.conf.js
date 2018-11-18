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
      }
    ]
  }
}