import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
  height: 6px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    background-color: #9f9f9f;
    width: 100%;
    height: 100%;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: white;
    width: 50%;
    height: 100%;
    border-radius: 8px;
  }
`


export default function Range() {
  return (
    <Wrapper />
  )
}
