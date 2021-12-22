import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export const usePlaylist = () => {
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    if (!token) {
      const _token = localStorage.getItem('SPOTIFY_TOKEN');
      if (_token) setToken(_token);
    }
  }, [token])

  useEffect(() => {
    if (token) {
      spotify.setAccessToken(token);
      spotify.getUserPlaylists().then((playlists) => {
        if (playlists.items.length) setPlaylists(playlists.items)
        console.log('[sidebar] playlists', playlists);
      });
    }
  }, [token]);

  return { playlists }
}