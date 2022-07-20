import React from 'react'
import { mountApplication, unmountApplication } from 'song_controller/bootstrap'
import Application from './Application';


export default function SongControllerWrapper() {
  return (
    <Application mountApplication={mountApplication} unmountApplication={unmountApplication} />
  )
}
