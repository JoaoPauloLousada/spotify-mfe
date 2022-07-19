import React from 'react'
import SongController from './components/SongController'

export const Dependencies = React.createContext({})

export default function App({ spotify, eventBus }) {
  
  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <SongController />
    </Dependencies.Provider>
  )
}