const cracoMfe = require('@spotify-mfe/craco-mfe');

module.exports = {
  devServer: {
    port: 8083
  },
  plugins: [
    {
      plugin: cracoMfe
    }
  ]
}