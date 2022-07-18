import React from 'react'
import SongController from './components/SongController'

const Dependencies = React.createContext({})

export default function App({ spotify }) {

  return (
    <Dependencies.Provider value={{ spotify }}>
      <SongController />
    </Dependencies.Provider>
  )
}