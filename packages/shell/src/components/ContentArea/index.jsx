import React from 'react'
import { usePlaylist } from '../../hooks/usePlayList'

export default function ContentArea() {
  const {playlist} = usePlaylist();
  
  return (
    <div>
      {playlist && <div>playlist selected: {playlist.href}</div>}
    </div>
  )
}
