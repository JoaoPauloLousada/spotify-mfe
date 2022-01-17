const deps = require('./package.json').dependencies

module.exports = {
  publicPath: "http://localhost:8080/",
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    /* module federation plugin import */
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "home_content",
        filename: "remoteEntry.js",
        exposes: {
          "./module": "./src/module",
        },
        shared: {
          ...deps,
          "vue": {
            eager: true,
            singleton: true,
            requiredVersion: deps.vue,
          }
        }
      }])
  },
};