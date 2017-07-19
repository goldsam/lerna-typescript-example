const webpackBase = require('./webpack-base.config');

module.exports = Object.assign({}, webpackBase, {
  entry: "./index.ts",
});
