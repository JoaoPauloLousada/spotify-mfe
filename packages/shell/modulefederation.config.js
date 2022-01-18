const { dependencies } = require("./package.json");

module.exports = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    sidebar: "sidebar@http://localhost:8081/remoteEntry.js",
    player: "player@http://localhost:8082/remoteEntry.js",
    signin: "signin@http://localhost:8083/remoteEntry.js",
    "home_content": "home_content@http://localhost:8084/remoteEntry.js"
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