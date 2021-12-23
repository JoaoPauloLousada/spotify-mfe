import { useCallback, useEffect, useState } from "react"

export const usePlaylist = () => {
  const [playlist, setPlaylist] = useState(null);
  const cb = useCallback(({ detail: _playlist }) => {
    console.log('[shell] playlist', _playlist);
    setPlaylist(_playlist);
  }, []);
  useEffect(() => {
    document.addEventListener('ON_PLAYLIST', cb);
    return () => document.removeEventListener('ON_PLAYLIST', cb);
  }, [cb]);

  return { playlist };
}