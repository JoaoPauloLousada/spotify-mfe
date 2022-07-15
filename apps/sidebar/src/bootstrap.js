import React from 'react'
import ReactDOM from 'react-dom'
import Shell from '@spotify-mfe/shell';
import App from './App'


const mountApplication = (htmlElement, dependencies) => {
  ReactDOM.render(<App {...dependencies} />, htmlElement)
}


const isDevelopment = process.env.NODE_ENV === 'development'
if (isDevelopment) {
  Shell.initialize({ appUrl: 'http://localhost:8081' })
    .then(({ spotify }) => {
      const devRootHtmlElement = document.getElementById('side-bar-app')

      if (devRootHtmlElement) mountApplication(devRootHtmlElement, { spotify })
    })

}

export { mountApplication }