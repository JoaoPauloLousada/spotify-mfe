const { dependencies } = require("./package.json");

module.exports = {
  name: "player",
  filename: "remoteEntry.js",
  exposes: {
    "./Player": "./src/Player",
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
  },
}