import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from '../src/App';

const Wrapper = styled.section `
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Playlist = styled.div`
  background-color: #1e1e1e;
  transition: background-color 450ms;
  cursor: pointer;
  padding: 8px;
  width: 140px;
  border-radius: 4px;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: #414141;
  }

  > img {
    width: 100%;
    aspect-ratio: 1 ;
  }
`

const Name = styled.p`
  font-size: 0.875rem;
  margin: 0;
  padding-top: 0.5rem;
`
const OwnerName = styled.p`
  font-size: 0.75rem;
  margin: 0;
  color: #b7b7b7;
  padding-bottom: 0.5rem;
`

const Title = styled.h3`
  margin-top: 0;
`

export default function FeaturedPlaylists() {
  const { spotify } = useContext(Dependencies);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    spotify.getFeaturedPlaylists().then(response => setPlaylists(response.playlists.items))
  }, [])

  const loadPlaylist = (list) => {
    spotify.getPlaylist(list.id).then(l => console.log('response', l))
  }

  return (
    <>
      <Title>Featured Playlists</Title>
      <Wrapper>
        {playlists.map(list => (
          <Playlist key={list.id} onClick={() => loadPlaylist(list)}>
            {list.images[0] && <img src={list.images[0].url} />}
            <Name>{list.name}</Name>
            <OwnerName>{list.owner.display_name}</OwnerName>
          </Playlist>
        ))}
      </Wrapper>
    </>
  )
}
