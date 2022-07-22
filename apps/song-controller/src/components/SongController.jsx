import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from '../App'
import play from '../assets/play.svg'
import pause from '../assets/pause.svg'
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
  const [playIcon, setPlayIcon] = useState(play)

  useEffect(() => {
    const checkPlaybackState = async () => {
      const playbackState = await spotify.getMyCurrentPlaybackState()
  
      if (playbackState.is_playing) setPlayIcon(pause)
      checkTrack()
    }

    checkPlaybackState()

    const callback = async (e) => {
      try {
        await spotify.play({context_uri: e.detail.album.uri, offset: { position: e.detail.track_number - 1 }})
        setTrack(e.detail)
      } catch (err) {
        const error = JSON.parse(err.response)?.error
        if (error?.reason && error.reason == "NO_ACTIVE_DEVICE") {
          alert('You have no active device. Please try to open your spotify app in one of your devices.')
        }
      }
    }
    
    eventBus.on('PLAY', callback)

    return () => {
      eventBus.remove('PLAY', callback)
    }
  }, [])

  const checkTrack = async () => {
    const playbackState = await spotify.getMyCurrentPlaybackState()
    if (playbackState.item) setTrack(playbackState.item)
  } 

  const playOrPause = async () => {
    const playbackState = await spotify.getMyCurrentPlaybackState()
    try {
      if (playbackState.is_playing) {
        await spotify.pause()
        setPlayIcon(play)
        checkTrack()
      } else {
        await spotify.play()
        setPlayIcon(pause)
        checkTrack()
      }
    } catch (err) {
      const error = JSON.parse(err.response)?.error
      if (error?.reason && error.reason == "NO_ACTIVE_DEVICE") {
        alert('You have no active device. Please try to open your spotify app in one of your devices.')
      }
    }
  }

  const skipToNext = async () => {
    await spotify.skipToNext()
    setPlayIcon(pause)
    setTimeout(checkTrack, 1000)
  }

  const skipToPrevious = async () =>  {
    await spotify.skipToPrevious()
    setPlayIcon(pause)
    setTimeout(checkTrack, 1000)
  }

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
          <img src={playForward} width="14" onClick={skipToPrevious} style={{transform: 'rotate(180deg)'}} />
          <img src={playIcon} width="28" style={{margin: '0 1rem'}} onClick={playOrPause}/>
          <img src={playForward} width="14" onClick={skipToNext} />
        </div>
        {/* <div style={{marginTop: '1rem'}}>
          <Range />
        </div> */}
      </Center>
      <Right>
        {/* <img src={sound} width="18" />
        <div style={{width: '120px', marginLeft: '1rem'}}>
          <Range />
        </div> */}
      </Right>
    </Wrapper>
  )
}
