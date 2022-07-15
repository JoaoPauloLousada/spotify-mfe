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

Shell.initialize()
  .then(({ SHELL_STATE }) => console.log('After shell is initialized:', SHELL_STATE))
  .then(() => ReactDOM.render(<Main />, htmlElement))