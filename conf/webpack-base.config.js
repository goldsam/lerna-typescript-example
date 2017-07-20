const path = require('path');
const config = require ('./config');

module.exports = {
  watch: false,
  context: config.path,
  devtool: "source-map",
  output: {
    path: path.join(config.path, 'dist'),
    filename: "index.js",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
