import React, { useContext, useEffect, useRef } from 'react'
import { Dependencies } from '../bootstrap';

export default function Application({ mountApplication }) {
  const htmlElement = useRef(null);
  const {spotify, eventBus} = useContext(Dependencies);

  useEffect(() => mountApplication(htmlElement.current, {spotify, eventBus}), [])

  return <div style={{height: '100%'}} ref={htmlElement}></div>
}