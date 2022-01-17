import React from 'react'
import { usePlaylist } from '../../hooks/usePlayList'

export default function ContentArea() {
  const {playlist} = usePlaylist();
  
  return (
    <div className='px-4'>
      <h1 className='text-2xl text-center my-10'>Home content area</h1>
      {playlist && <div>
        <span className='font-bold text-xl'>Playlist selected:</span> {playlist.href}</div>}
    </div>
  )
}
