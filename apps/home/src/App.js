import React from 'react'
import Home from '../components/Home'

export const Dependencies = React.createContext({})

export default function App({ spotify }) {

  return (
    <Dependencies.Provider value={{ spotify }}>
      <Home />
    </Dependencies.Provider>
  )
}