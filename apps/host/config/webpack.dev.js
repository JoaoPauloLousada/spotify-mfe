const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { EnvironmentPlugin } = require('webpack')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        sidebar: 'sidebar@http://localhost:8081/remoteEntry.js',
        home: 'home@http://localhost:8082/remoteEntry.js',
        song_controller: 'song_controller@http://localhost:8083/remoteEntry.js',
        search: 'search@http://localhost:8084/remoteEntry.js',
      }
    }),
    new EnvironmentPlugin({
      BASE_URL: 'http://localhost:8080'
    })
  ]
}

module.exports = merge(commonConfig, devConfig);