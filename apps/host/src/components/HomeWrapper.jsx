import React from 'react'
import { mountApplication } from 'home/bootstrap'
import Application from './Application';


export default function HomeWrapper() {
  return (
    <Application mountApplication={mountApplication} />
  )
}
