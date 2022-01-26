require('dotenv').config({ path: '../../.env' });
const { dependencies } = require("./package.json");
console.log(process.env)
module.exports = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    sidebar: process.env.SIDEBAR_URL,
    player: process.env.PLAYER_URL,
    signin: process.env.SIGNIN_URL,
    home_content: process.env.HOME_CONTENT_URL,
    friend_activity: process.env.FRIEND_ACTIVITY_URL
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