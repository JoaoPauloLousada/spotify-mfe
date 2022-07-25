import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Dependencies } from './components/Dependencies'
import Sidebar from './components/Sidebar'

export default function App({ spotify, eventBus, theme }) {
  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    </Dependencies.Provider>
  )
}