import React from 'react'
import ReactDOM from 'react-dom'
import Shell from '@spotify-mfe/shell';
import App from './App';
import { createMemoryHistory } from "history";

const mountApplication = (htmlElement, dependencies) => {
  const history = createMemoryHistory();

  ReactDOM.render(<App {...dependencies} history={history} />, htmlElement)
}


const isDevelopment = process.env.NODE_ENV === 'development' && document.getElementById('home-app')
if (isDevelopment) {
  Shell.initialize({ appUrl: 'http://localhost:8082' })
    .then((dependencies) => {
      const devRootHtmlElement = document.getElementById('home-app')

      if (devRootHtmlElement) mountApplication(devRootHtmlElement, dependencies)
    })

}

export { mountApplication }