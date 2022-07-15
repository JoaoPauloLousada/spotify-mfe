import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Shell from '@spotify-mfe/shell';

const Main = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

const htmlElement = document.getElementById('host-app')

Shell.initialize({ appUrl: 'http://localhost:8080' })
  .then(({ spotify }) => console.log('After shell is initialized:', spotify))
  .then(() => ReactDOM.render(<Main />, htmlElement))