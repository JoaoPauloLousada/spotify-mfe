const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');


const devConfig = {
  mode: 'development',
  devServer: {
    port: 8083,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'song_controller',
      filename: 'remoteEntry.js',
      exposes: {
        './bootstrap': './src/bootstrap'
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig);