import React from 'react'
import ReactDOM from 'react-dom'
import Shell from '@spotify-mfe/shell';
import App from './App'


const mountApplication = (htmlElement, dependencies) => {
  ReactDOM.render(<App {...dependencies} />, htmlElement)
}

const unmountApplication = (htmlElement) => ReactDOM.unmountComponentAtNode(htmlElement)

const isDevelopment = process.env.NODE_ENV === 'development' && document.getElementById('song-controller-app')
if (isDevelopment) {
  Shell.initialize({ appUrl: 'http://localhost:8083' })
    .then((dependencies) => {
      const devRootHtmlElement = document.getElementById('song-controller-app')

      if (devRootHtmlElement) mountApplication(devRootHtmlElement, dependencies)
    })

}

export { mountApplication, unmountApplication }