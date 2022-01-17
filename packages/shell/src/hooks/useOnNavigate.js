import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useOnNavigate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const onNavigate = (e) => {
      console.log('onNavigate', e.detail);
      if (e.detail.route) navigate(e.detail.route);
    }
    document.addEventListener('onNavigate', onNavigate);
    return () => document.removeEventListener('onNavigate', onNavigate);
  }, []);
}