import React from 'react'
import { Dependencies } from './components/Dependencies'
import Sidebar from './components/Sidebar'

export default function App({ spotify, eventBus }) {

  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <Sidebar />
    </Dependencies.Provider>
  )
}