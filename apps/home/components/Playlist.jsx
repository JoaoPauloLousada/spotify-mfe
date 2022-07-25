import React, { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from '../src/App';
import { useParams } from 'react-router-dom';


const Wrapper = styled.div`
  background-color: ${({theme}) => theme['gray-300']};
  height: 100%;
  overflow-y: scroll;
  color: ${({theme}) => theme.light};
  font-family: 'Verdana';
  `

const Header = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  background-color: ${({theme}) => theme['gray-200']};

  > img {
    width: 250px;
    aspect-ratio: 1;
    box-shadow: 1px 5px 22px 5px rgba(0, 0, 0, 0.3);
  }
  `

const OwnerName = styled.small`
  color: ${({theme}) => theme['gray-100']};
`

const TracksWrapper = styled.section`
  color: ${({theme}) => theme.light};
`
const Tracks = styled.ul`
  list-style: none;
  color: ${({theme}) => theme.light};
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
    background-color: ${({theme}) => theme['gray-200']};
  }
`
const ArtistName = styled.small`
  color: ${({theme}) => theme['gray-100']};
`

export default function Playlist() {
  const { spotify, eventBus } = useContext(Dependencies);
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null)
  const tracks = useMemo(() => playlist?.tracks?.items ?? [], [playlist])

  useEffect(() => {
    spotify.getPlaylist(id).then(response => setPlaylist(response))
  }, [id])

  const play = (track) => {
    eventBus.dispatch('PLAY', track)
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
        {tracks.map(({track}) => track && (
          <Track key={track.id} onClick={() => play(track)}>
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
