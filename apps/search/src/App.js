import React from 'react'

export const Dependencies = React.createContext({});

export default function App({ spotify, eventBus }) {

  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <div>Search app</div>
    </Dependencies.Provider>
  )
}