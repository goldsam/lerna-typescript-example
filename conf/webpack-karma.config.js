const webpack = require('webpack');

const webpackBase = require('./webpack-base.config');

module.exports = Object.assign({}, webpackBase, {
  entry: "./index.ts",
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)$/ 
    })
  ]
});
  
module.exports.module.rules.push({
  enforce: 'post',
  test: /\.(ts|js)$/,
  loader: 'istanbul-instrumenter-loader',
  exclude: [
    'node_modules',
    /\.spec\.ts$/
  ]
});
