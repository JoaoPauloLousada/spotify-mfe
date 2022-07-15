import SpotifyAPI from 'spotify-web-api-js';

const spotify = new SpotifyAPI()

export default class Auth {
  getMe() {
    spotify.getMe()
      .then((data) => console.log('getMe', data))
  }


  async isAuth() {
    try {
      response = await spotify.getMe()
      return true;
    } catch (error) {
      return false;
    }
  }
} 
