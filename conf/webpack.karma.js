const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common');

module.exports = webpackMerge(webpackCommonConfig, {
  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.(ts|js)$/,
        loader: 'istanbul-instrumenter-loader',
        exclude: [
          function(file) {
            return file.indexOf(webpackCommonConfig.context) != 0;
          },
          'node_modules',
          /\.spec\.ts$/
        ]
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)$/ 
    })
  ]
});
