import React, { useCallback, useContext, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce';
import { Dependencies } from '../App';

const Playlist = styled.div`
  background-color: ${({theme}) => theme['gray-250']};
  transition: background-color 450ms;
  cursor: pointer;
  padding: 8px;
  width: 140px;
  border-radius: 4px;
  text-decoration: none;
  color: ${({theme}) => theme.light};
  font-size: 0.875rem;
  &:hover {
    background-color: ${({theme}) => theme['gray-200']};
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
  const {spotify, eventBus, theme} = useContext(Dependencies);
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
      <div style={{backgroundColor: theme['gray-300'], height: '100%', overflowY: 'scroll', padding: "1rem"}}>
        <Input type="text" onChange={onChange} placeholder="Search playlists" /> 
        <h2 style={{color: theme.light}}>Results</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '1rem 0 4rem'}}>
          {playlists.map(playlist => (
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
