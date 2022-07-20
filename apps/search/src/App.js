import React, { useEffect } from 'react'
import Search from './components/Search';

export const Dependencies = React.createContext({});


export default function App({ spotify, eventBus }) {
  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <Search />
    </Dependencies.Provider>
  )
}