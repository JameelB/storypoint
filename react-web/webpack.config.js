const { join } = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  favicon: "./public/favicon.ico",
  template: "./public/index.html",
  filename: "./index.html"
});
const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: "style-loader"}, 
          {loader: "css-loader"},
          // {
          //   loader: 'postcss-loader', // Run post css actions
          //   options: {
          //     plugins: function () { // post css plugins, can be exported to postcss.config.js
          //       return [
          //         require('precss'),
          //         require('autoprefixer')
          //       ];
          //     }
          //   }
          // },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                join(__dirname, "node_modules")
              ]            
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  plugins: [htmlPlugin]
};