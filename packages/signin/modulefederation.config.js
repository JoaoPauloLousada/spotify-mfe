const { dependencies } = require("./package.json");

module.exports = {
  name: "signin",
  filename: "remoteEntry.js",
  exposes: {
    "./Login": "./src/bootstrap",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "spotify-web-api-js": {
      singleton: true,
    }
  },
}