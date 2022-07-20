import React, { useCallback, useContext, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce';
import { Dependencies } from '../App';

const Playlist = styled.div`
  background-color: #1e1e1e;
  transition: background-color 450ms;
  cursor: pointer;
  padding: 8px;
  width: 140px;
  border-radius: 4px;
  color: inherit;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #414141;
  }

  > img {
    width: 100%;
    aspect-ratio: 1 ;
  }
`

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  padding: 0 2rem;
  border: none;
`

export default function Search() {
  const {spotify, eventBus} = useContext(Dependencies);
  const [playlists, setPlaylists] = useState([]);

  const onChange = useCallback(debounce((e) => {
    const { value } = e.target
    if (value) {
      spotify.search(e.target.value, ['playlist']).then(response => {        
        if (response?.playlists?.items) {
          setPlaylists(response.playlists.items) 
        }
      })
    }
  }, 450), [])

  const push = useCallback((id) => {    
    eventBus.dispatch('CHILD_APP:NAVIGATE', { appName: 'SEARCH', location: {pathname: `/${id}`} })
  })

  return (
    <>
      <div style={{backgroundColor: 'black', height: '100%', overflowY: 'scroll', padding: "1rem"}}>
        <Input type="text" onChange={onChange} placeholder="Search playlists" /> 
        <h2 style={{color: 'white'}}>Results</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '1rem 0 4rem'}}>
          {playlists.length && playlists.map(playlist => (
            <Playlist key={playlist.id} onClick={() => push(playlist.id)}>
              {playlist?.images?.[0] && <img src={playlist.images[0].url} width="60px"/>}
              <p>{playlist.name}</p>
            </Playlist>
          ))}
        </div>
      </div>
    </>
  )
}
