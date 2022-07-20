import React from 'react'
import ReactDOM from 'react-dom'
import Shell from '@spotify-mfe/shell';
import App from './App'


const mountApplication = (htmlElement, dependencies) => {
  ReactDOM.render(<App {...dependencies} />, htmlElement)
}

const unmountApplication = (htmlElement) => ReactDOM.unmountComponentAtNode(htmlElement)

const devRootHtmlElement = document.getElementById('search-app')
const isDevelopment = process.env.NODE_ENV === 'development' && devRootHtmlElement
if (isDevelopment) {
  Shell.initialize({ appUrl: 'http://localhost:8084' })
    .then((dependencies) => {
      mountApplication(devRootHtmlElement, dependencies)
    })

}

export { mountApplication, unmountApplication }