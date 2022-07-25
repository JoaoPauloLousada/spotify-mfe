import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.dark};
  color: ${({theme}) => theme.light};
  height: 100%;
  width: 100%;
  h3 {
    margin: 0;
    padding: 2rem 0;
    text-align: center;
  }
`

export default function Loading() {
  return (
    <Wrapper>
      <h3>Loading</h3>
    </Wrapper>
  )
}
