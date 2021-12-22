import { useEffect } from "react"

export const useListeners = () => {
  const addListeners = () => {
    console.log('addListeners');
  }
  const removeListeners = () => {
    console.log('removeListeners');
  };

  useEffect(() => {
    addListeners();
    return () => removeListeners();
  }, [])
}