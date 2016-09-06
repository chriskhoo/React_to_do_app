var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var debug = process.env.NODE_ENV != "production";

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry:[
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.min.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {test: /\.css$/,
        loader: "style-loader!css-loader"}
    ]
  },
  plugins: debug ? [HtmlWebpackPluginConfig] : [HtmlWebpackPluginConfig,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle:false, sourcemap:false})
  ]
};
