import React from 'react'
import { mountApplication } from 'sidebar/bootstrap'
import Router from './Router'


export default function App() {
  return <>
    <div>Host App</div>
    <Router />
    <Application mountApplication={mountApplication} />
  </>
}
