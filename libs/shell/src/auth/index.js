export default class Auth {
  spotify
  authEndpoint = "https://accounts.spotify.com/authorize"
  redirectUri
  clientId = "68262efa2578442f804543a66ce7d5f0"
  scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  loginUrl

  constructor({ appUrl, spotify }) {
    this.spotify = spotify
    this.redirectUri = appUrl
    this.loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`
  }

  redirectToLogin() {
    location.href = this.loginUrl
  }

  getTokenFromUrl() {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  }

  async handleAuth() {
    let token = localStorage.getItem('SPOTIFY_TOKEN');

    if (!token) {
      const urlInfo = this.getTokenFromUrl()
      token = urlInfo.access_token

      if (!token) {
        this.redirectToLogin()
        return false
      }

      window.location.hash = ""
      localStorage.setItem('SPOTIFY_TOKEN', token)
    }

    try {
      this.spotify.setAccessToken(token)
      await this.spotify.getMe()
      return true
    } catch (error) {
      localStorage.removeItem('SPOTIFY_TOKEN')
      this.redirectToLogin()
      return false
    }
  }
} 
