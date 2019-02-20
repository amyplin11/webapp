var path = require("path");

//folders
const pkgRoot = path.resolve(__dirname, "../../");
const nodeModules = path.join(pkgRoot, "node_modules");
const srcRoot = path.join(pkgRoot, "src");

module.exports = {
  pkgRoot,
  nodeModules,
  srcRoot
};
