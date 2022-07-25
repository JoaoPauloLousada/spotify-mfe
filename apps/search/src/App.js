import React from 'react'
import { ThemeProvider } from 'styled-components';
import Search from './components/Search';

export const Dependencies = React.createContext({});


export default function App({ spotify, eventBus, theme }) {
  return (
    <Dependencies.Provider value={{ spotify, eventBus, theme }}>
      <ThemeProvider theme={theme}>
        <Search />
      </ThemeProvider>
    </Dependencies.Provider>
  )
}