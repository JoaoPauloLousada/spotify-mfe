import React, { useContext, useEffect, useRef } from 'react'
import { Dependencies } from '../bootstrap';

export default function Application({ mountApplication, onMounted }) {
  const htmlElement = useRef(null);
  const {spotify, eventBus} = useContext(Dependencies);

  useEffect(() => {
    mountApplication(htmlElement.current, {spotify, eventBus, onMounted})
  }, [])

  return <div style={{height: '100%'}} ref={htmlElement}></div>
}