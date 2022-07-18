import React, { useContext, useEffect, useRef } from 'react'
import { Dependencies } from '../bootstrap';

export default function Application({ mountApplication }) {
  const htmlElement = useRef(null);
  const {spotify} = useContext(Dependencies);

  useEffect(() => mountApplication(htmlElement.current, {spotify}), [])

  return <div style={{height: '100%'}} ref={htmlElement}></div>
}