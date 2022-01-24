const deps = require('./package.json').dependencies

module.exports = {
  publicPath: "http://localhost:8085/",
  devServer: {
    port: 8085
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    /* module federation plugin import */
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "friend_activity",
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