const cracoMfe = require('@spotify-mfe/craco-mfe');

module.exports = {
  devServer: {
    port: 8082
  },
  plugins: [
    {
      plugin: cracoMfe
    }
  ]
}