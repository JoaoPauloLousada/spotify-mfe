import React from 'react'
import { mountApplication, unmountApplication } from 'sidebar/bootstrap'
import Application from './Application';

export default function SidebarWrapper() {
  return (
    <Application mountApplication={mountApplication} unmountApplication={unmountApplication} />
  )
}
