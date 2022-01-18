import SpotifyWebApi from 'spotify-web-api-js';

let instance = null;

export default function Spotify() {
  if (!instance) instance = new SpotifyWebApi();
  return instance;
}