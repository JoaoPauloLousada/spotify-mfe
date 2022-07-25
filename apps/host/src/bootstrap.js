import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Shell from '@spotify-mfe/shell';
import { ThemeProvider } from 'styled-components';

export const Dependencies = React.createContext({});

const Main = ({ spotify, eventBus, theme }) => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Dependencies.Provider value={{ spotify, eventBus, theme }}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </Dependencies.Provider>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

const htmlElement = document.getElementById('host-app')

const BASE_URL = process.env.BASE_URL
Shell.initialize({ appUrl: BASE_URL })
  .then((dependencies) => ReactDOM.render(<Main {...dependencies} />, htmlElement))