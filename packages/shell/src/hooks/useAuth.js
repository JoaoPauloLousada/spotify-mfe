import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromUrl } from "../spotify";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('SPOTIFY_TOKEN');
    if (!tokenFromLocalStorage) {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const tokenFromUrl = hash.access_token;
      if (tokenFromUrl) {
        localStorage.setItem('SPOTIFY_TOKEN', tokenFromUrl);
        setToken(tokenFromLocalStorage)
      } else navigate('/login');
    } else {
      setToken(tokenFromLocalStorage);
    }
  }, []);

  return { token };
}