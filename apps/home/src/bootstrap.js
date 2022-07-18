import React from 'react'
import ReactDOM from 'react-dom'
import Shell from '@spotify-mfe/shell';
import App from './App';
import { createBrowserHistory } from "history";

const mountApplication = (htmlElement, dependencies) => {
  const history = createBrowserHistory();

  ReactDOM.render(<App {...dependencies} history={history} />, htmlElement)
}


const isDevelopment = process.env.NODE_ENV === 'development'
if (isDevelopment) {
  Shell.initialize({ appUrl: 'http://localhost:8082' })
    .then(({ spotify }) => {
      const devRootHtmlElement = document.getElementById('home-app')

      if (devRootHtmlElement) mountApplication(devRootHtmlElement, { spotify })
    })

}

export { mountApplication }