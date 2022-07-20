import React from 'react'
import { mountApplication } from 'search/bootstrap'
import Application from '../components/Application'

export default function Search() {
  return (
    <Application mountApplication={mountApplication} />
  )
}
