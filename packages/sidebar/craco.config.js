const cracoMfe = require('@spotify-mfe/craco-mfe');

module.exports = {
  devServer: {
    port: 8081
  },
  plugins: [
    {
      plugin: cracoMfe
    }
  ]
}