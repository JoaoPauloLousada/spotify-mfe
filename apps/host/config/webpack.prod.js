const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const webpack = require('webpack');

const domain = process.env.DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        sidebar: `sidebar@${process.env.SIDEBAR_REMOTE_ENTRY}`,
        home: `home@${process.env.HOME_REMOTE_ENTRY}`,
        song_controller: `song_controller@${process.env.SONG_CONTROLLER_REMOTE_ENTRY}`,
        search: `search@${process.env.SEARCH_REMOTE_ENTRY}`,
      },
      shared: packageJson.dependencies
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL)
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)