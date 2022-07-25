import React from 'react'
import { ThemeProvider } from 'styled-components'
import SongController from './components/SongController'

export const Dependencies = React.createContext({})

export default function App({ spotify, eventBus, theme }) {
  
  return (
    <Dependencies.Provider value={{ spotify, eventBus, theme }}>
      <ThemeProvider theme={theme}>
        <SongController />
      </ThemeProvider>
    </Dependencies.Provider>
  )
}