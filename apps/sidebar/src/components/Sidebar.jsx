import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from './Dependencies'

const Wrapper = styled.div`
  background-color: #000505;
  height:100%;
  width: 100%;
  * {
    margin: 0;
    padding: 0;
  }
  color: white;
`

function useUserPlaylists() {
  const { spotify } = useContext(Dependencies);
  const [userPlaylistsResponse, setUserPlaylistsResponse] = useState(null);
  const playlists = useMemo(() => userPlaylistsResponse?.items, [userPlaylistsResponse])
  
  useEffect(() => {
    spotify.getUserPlaylists()
      .then(playlists => setUserPlaylistsResponse(playlists))
  }, [])

  return { playlists }
}

export default function Sidebar() {
  const { playlists } = useUserPlaylists()

  return <Wrapper>
    <ul>
      <li>Home</li>
      <li>Search</li>
    </ul>
    <hr />
    <ul>
      {playlists?.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  </Wrapper>
}
