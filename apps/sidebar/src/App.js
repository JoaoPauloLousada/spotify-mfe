import React from 'react'
import { Dependencies } from './components/Dependencies'
import Sidebar from './components/Sidebar'

export default function App({ spotify }) {

  return (
    <Dependencies.Provider value={{ spotify }}>
      <Sidebar />
    </Dependencies.Provider>
  )
}