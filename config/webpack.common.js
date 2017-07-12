const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin=require('clean-webpack-plugin')
const CommonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: "cheap-eval-source-map",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..','dist'),
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    }, {
      test: /.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: './src/index.html',
      favicon: './static/img/favicon.icon',
      hash: true,
      cache: true,
    })
  ],
  devServer: {
    port: '8081',
    host: 'localhost',
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
