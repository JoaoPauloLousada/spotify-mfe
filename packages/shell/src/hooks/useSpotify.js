import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { useAuth } from "./useAuth";

const spotify = new SpotifyWebApi();

export const useSpotify = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { token } = useAuth()

  const dispatchMe = useCallback(() => {
    if (user) {
      const SPOTIFY_ME = new CustomEvent('SPOTIFY_ME', { detail: user });
      document.dispatchEvent(SPOTIFY_ME)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('REQUEST_SPOTIFY_ME', dispatchMe)

    return () => document.removeEventListener('REQUEST_SPOTIFY_ME', dispatchMe);
  }, [])

  useEffect(() => {
    if (token) {
      spotify.setAccessToken(token);
      spotify.getMe()
        .then((_user) => setUser(_user))
        .catch(({ status }) => {
          localStorage.removeItem('SPOTIFY_TOKEN')
          if (status === 401) navigate('/login')
        });
    }
  }, [token])

  useEffect(() => {
    if (user) {
      const SPOTIFY_ME = new CustomEvent('SPOTIFY_ME', { detail: user });
      document.dispatchEvent(SPOTIFY_ME)
    }
  }, [user])
  // spotify.getUserPlaylists().then((playlists) => {
  //   dispatch({
  //     type: "SET_PLAYLISTS",
  //     playlists,
  //   });
  // });

  // spotify.getPlaylist("37i9dQZEVXcOlERHZyuUyR").then((res) =>
  //   dispatch({
  //     type: "SET_DISCOVER_WEEKLY",
  //     discover_weekly: res,
  //   })
  // );

  return { user };
}