const path = require('path');

const pkg = process.env.TARGET_PACKAGE;

if (!pkg) {
  throw new Error('Plase specify a package name using the TARGET_PACKAGE environment variable.');
}

const pkgPath = path.join(__dirname, '../packages', pkg);

module.exports = {
  watch: false,
  context: pkgPath,
  devtool: "source-map",
  output: {
    path: path.join(pkgPath, 'dist'),
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
