const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path')
module.exports = Merge(CommonConfig,{
  plugins :[
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
  ],
   devServer: {
    port:'8081',
    host:'localhost',
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
})