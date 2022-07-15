import React, { useEffect, useRef } from 'react'

export default function Application({ mountApplication }) {
  const htmlElement = useRef(null);

  useEffect(() => mountApplication(htmlElement.current), [])

  return <div ref={htmlElement}></div>
}