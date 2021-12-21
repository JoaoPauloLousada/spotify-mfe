const webpack = require("webpack");

const getModuleFederationConfigPath = (additionalPaths = []) => {
  const path = require("path");
  const fs = require("fs");
  const appDirectory = fs.realpathSync(process.cwd());
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

  const moduleFederationConfigFiles = [
    "modulefederation.config.js",
    ...additionalPaths,
  ];
  return moduleFederationConfigFiles
    .map(resolveApp)
    .filter(fs.existsSync)
    .shift();
};

module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    const moduleFederationConfigPath = getModuleFederationConfigPath();

    webpackConfig.output.publicPath = "auto";
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.container.ModuleFederationPlugin(require(moduleFederationConfigPath))
    ];

    return webpackConfig;
  }
}