import Spotify from "./spotify";

const token = localStorage.getItem('SPOTIFY_TOKEN')
const spotify = Spotify()

if (token) {
  spotify.setAccessToken(token)
} else {
  console.log('NO TOKEN');
}
