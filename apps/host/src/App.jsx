import React from 'react'
import { createGlobalStyle } from 'styled-components'
// import { mountApplication } from 'sidebar/bootstrap'
import Router from './Router'

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Verdana';
}
`

export default function App() {
  return <>
    <GlobalStyle />
    <Router />
    {/* <Application mountApplication={mountApplication} /> */}
  </>
}
