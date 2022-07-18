import React from 'react'
import styled from 'styled-components'

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
  
  return (
    <Wrapper>
      <Left>left</Left>
      <Center>center</Center>
      <Right>right</Right>
    </Wrapper>
  )
}
