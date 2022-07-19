import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Dependencies } from '../App'

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
`
const Center = styled.div``

const Right = styled.div``


export default function SongController() {
  const {spotify, eventBus} = useContext(Dependencies)

  useEffect(() => {
    const callback = (e) => spotify.play({context_uri: e.detail.uri})
    
    eventBus.on('PLAY', callback)

    return () => {
      eventBus.remove('PLAY', callback)
    }
  }, [])

  return (
    <Wrapper>
      <Left>left</Left>
      <Center>center</Center>
      <Right>right</Right>
    </Wrapper>
  )
}
