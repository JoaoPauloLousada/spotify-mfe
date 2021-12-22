import { useCallback, useEffect, useState } from "react";

const REQUEST_SPOTIFY_ME = new CustomEvent('REQUEST_SPOTIFY_ME');

export const useSpotifyUser = () => {
  const [user, setUser] = useState(null);

  const onSpotifyMe = useCallback((e) => {
    console.log('[sidebar] SPOTIFY_ME', e, e.detail);
    setUser(e.detail);
  }, [])

  useEffect(() => {
    document.addEventListener('SPOTIFY_ME', onSpotifyMe)

    if (!user) {
      document.dispatchEvent(REQUEST_SPOTIFY_ME);
    }

    return () => document.removeEventListener('SPOTIFY_ME', onSpotifyMe)
  }, [user])
}