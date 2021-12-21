const { dependencies } = require("./package.json");

module.exports = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    // app01: "app01@http://localhost:8081/remoteEntry.js"
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