const path = require('path');

const package = process.env.TARGET_PACKAGE;

if (!package) {
  throw new Error('Please specify a package name using the TARGET_PACKAGE environment variable.');
}

const packagePath = path.join(__dirname, '../packages', package);

module.exports = {
  watch: false,
  context: packagePath,
  entry: "./index.ts",
  devtool: "source-map",
  output: {
    path: path.join(packagePath, 'dist'),
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
