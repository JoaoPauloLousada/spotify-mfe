import React, { useEffect, useRef } from 'react'

export default function Application({ mount }) {
  const ref = useRef(null);

  useEffect(() => {
    mount({el: ref.current});
  }, [])

  return (
    <div ref={ref} className="w-full h-full">
    </div>
  )
}
