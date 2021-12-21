const { dependencies } = require("./package.json");

module.exports = {
  name: "sidebar",
  filename: "remoteEntry.js",
  exposes: {
    "./Sidebar": "./src/Sidebar",
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