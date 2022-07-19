import React, { useCallback, useContext } from 'react'
import { mountApplication } from 'home/bootstrap'
import Application from './Application';
import { useHistory } from 'react-router-dom';
import { Dependencies } from '../bootstrap';


export default function HomeWrapper() {
  const history = useHistory();
  const {eventBus} = useContext(Dependencies)
  const onMounted = useCallback(() => {
    eventBus.dispatch('PARENT_APP:NAVIGATE', history.location)
  }, [])
  return (
    <Application mountApplication={mountApplication} onMounted={onMounted} />
  )
}
