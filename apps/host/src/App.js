import React from 'react'
import { mountApplication } from 'sidebar/bootstrap'
import Application from './components/Application'


export default function App() {
  return <>
    <div>Host App</div>
    <Application mountApplication={mountApplication} />
  </>
}
