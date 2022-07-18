import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Shell from '@spotify-mfe/shell';

export const Dependencies = React.createContext({});

const Main = ({ spotify }) => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Dependencies.Provider value={{ spotify }}>
            <App />
          </Dependencies.Provider>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

const htmlElement = document.getElementById('host-app')

Shell.initialize({ appUrl: 'http://localhost:8080' })
  .then(({ spotify }) => ReactDOM.render(<Main spotify={spotify} />, htmlElement))