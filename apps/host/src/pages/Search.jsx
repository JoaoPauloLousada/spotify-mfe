import React from 'react'
import { mountApplication, unmountApplication } from 'search/bootstrap'
import Application from '../components/Application'

export default function Search() {
  return (
    <Application mountApplication={mountApplication} unmountApplication={unmountApplication} />
  )
}
