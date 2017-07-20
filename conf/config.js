const path = require('path');

const package = process.env.TARGET_PACKAGE;

if (!package) {
  throw new Error('Plase specify a package name using the TARGET_PACKAGE environment variable.');
}

module.exports = {
  package,
  path: path.join(__dirname, '../packages', package),
};
