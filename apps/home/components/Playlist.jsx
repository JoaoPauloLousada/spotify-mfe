import React, { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from '../src/App';
import { useParams } from 'react-router-dom';


const Wrapper = styled.div`
  background-color: black;
  height: 100%;
  overflow-y: scroll;
  color: white;
  font-family: 'Verdana';
`

const Header = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 2rem;

  background-color: #3b3b3b;
  > img {
    width: 250px;
    aspect-ratio: 1;
    box-shadow: 1px 5px 22px 5px rgba(0, 0, 0, 0.3);
  }
`

const OwnerName = styled.small`
  color: #c5c5c5;
`

const TracksWrapper = styled.section`
  color: white;
`
const Tracks = styled.ul`
  list-style: none;
  color: white;
  padding: 0 1rem 1rem;
`
const Track = styled.li`
  display: flex;
  margin-top: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 150ms;

  &:hover {
    background-color: #373737;
  }
`
const ArtistName = styled.small`
  color: #c5c5c5;
`

export default function Playlist() {
  const { spotify } = useContext(Dependencies);
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null)
  const tracks = useMemo(() => playlist?.tracks?.items ?? [], [playlist])

  useEffect(() => {
    spotify.getPlaylist(id).then(response => setPlaylist(response))
  }, [])

  const play = (id) => {
    console.log('play', id)
  }

  if (!playlist) return <Wrapper />

  return (
    <Wrapper>
      <Header>
        <img src={playlist.images?.[0]?.url ?? ''} />
        <div style={{paddingLeft: '1rem'}}>
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
          <OwnerName>{playlist.owner.display_name}</OwnerName>
        </div>
      </Header>
      <TracksWrapper>
        <Tracks>
        {tracks.map(({track}) => (
          <Track key={track.id} onClick={() => play(track.id)}>
            <img src={track.album?.images?.[0].url ?? ''} width="60px"/>
            <div style={{paddingLeft: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
              <p style={{margin: '0 0 0.25rem',}}>{track.name}</p>
              <ArtistName>{track.artists.map(item => item.name).filter(Boolean).join(", ")}</ArtistName>
            </div>
          </Track>  
        ))}
        </Tracks>
      </TracksWrapper>
    </Wrapper>
  )
}
