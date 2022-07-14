import React from 'react'
import ReactDOM from 'react-dom'


const mountApplication = htmlElement => {
  ReactDOM.render(<h1>Hello World! I'm sidebar</h1>, htmlElement)
}


const isDevelopment = process.env.NODE_ENV === 'development'
if (isDevelopment) {
  const devRootHtmlElement = document.getElementById('side-bar-app')

  if (devRootHtmlElement) mountApplication(devRootHtmlElement)
}