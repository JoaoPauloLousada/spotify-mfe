import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const mountApplication = htmlElement => {
  ReactDOM.render(<App />, htmlElement)
}


const isDevelopment = process.env.NODE_ENV === 'development'
if (isDevelopment) {
  const devRootHtmlElement = document.getElementById('side-bar-app')

  if (devRootHtmlElement) mountApplication(devRootHtmlElement)
}

export { mountApplication }