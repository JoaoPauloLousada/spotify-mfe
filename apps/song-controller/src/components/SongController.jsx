import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from '../App'
import play from '../assets/play.svg'
import playForward from '../assets/play-forward.svg'
import sound from '../assets/sound.svg'
import Range from './Range'

const Wrapper = styled.section`
  background-color: #121212;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  &, * {
    color: white;
  }
`

const Left = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    cursor: pointer;
  }
  > div {
    display: flex;
    justify-content: center;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5rem;
`


export default function SongController() {
  const {spotify, eventBus} = useContext(Dependencies)
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const callback = (e) => {
      console.log('e.detail', e.detail);
      spotify.play({context_uri: e.detail.uri})
      setTrack(e.detail)
    }
    
    eventBus.on('PLAY', callback)

    return () => {
      eventBus.remove('PLAY', callback)
    }
  }, [])

  return (
    <Wrapper>
      <Left>
        {track && (
        <>
          <p style={{fontSize: '12px', margin: 0, marginBottom: '4px'}}>{track.name}</p>
          <p style={{fontSize: '10px', margin: 0, color:'#b7b7b7'}}>{track.artists.map(artirst => artirst.name).filter(Boolean).join(", ")}</p>
        </>
        )}
      </Left>
      <Center>
        <div>
          <img src={playForward} width="14" />
          <img src={play} width="28" style={{margin: '0 1rem'}}/>
          <img src={playForward} width="14" />
        </div>
        <div style={{marginTop: '1rem'}}>
          <Range />
        </div>
      </Center>
      <Right>
        <img src={sound} width="18" />
        <div style={{width: '120px', marginLeft: '1rem'}}>
          <Range />
        </div>
      </Right>
    </Wrapper>
  )
}
