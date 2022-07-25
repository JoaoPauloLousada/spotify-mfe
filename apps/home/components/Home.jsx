import React from 'react'
import styled from 'styled-components';
import FeaturedPlaylists from './FeaturedPlaylists';

const Wrapper = styled.section`
  background-color: ${({theme}) => theme['gray-300']};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: white;
  font-family: 'Verdana';
  padding: 2rem 1.5rem;
  
  * {
    box-sizing: border-box;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <FeaturedPlaylists />
    </Wrapper>
  )
}
