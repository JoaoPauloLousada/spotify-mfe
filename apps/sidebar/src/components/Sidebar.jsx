import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Dependencies } from './Dependencies'
import home from '../assets/home.svg'
import search from '../assets/search.svg'

const Wrapper = styled.div`
  background-color: #000505;
  height:100%;
  width: 100%;
  color: white;
  padding: 2rem 1rem;
  box-sizing: border-box;

  * {
    margin: 0;
    padding: 0;
    font-family: 'Verdana';
    box-sizing: border-box;
  }
`

const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  min-height: 1.75rem;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #c7c5c5;
  transition: color 350ms;
  margin-top: ${({gap}) => gap && '0.75rem'};

  &:hover {
    color: white;
  }
  
  > a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none; 
    color: inherit
  }
`

const Icon = styled.img`
  display: inline-block;
  margin-right: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
`

const Divider = styled.hr`
  margin: 1.125rem 0;
`

function useUserPlaylists() {
  const { spotify } = useContext(Dependencies);
  const [userPlaylistsResponse, setUserPlaylistsResponse] = useState(null);
  const playlists = useMemo(() => userPlaylistsResponse?.items, [userPlaylistsResponse])
  
  useEffect(() => {
    spotify.getUserPlaylists()
      .then(playlists => setUserPlaylistsResponse(playlists))
  }, [])

  return { playlists }
}

export default function Sidebar() {
  const { playlists } = useUserPlaylists()
  const { eventBus } = useContext(Dependencies)

  const push = (e) => {
    e.preventDefault();
    eventBus.dispatch('CHILD_APP:NAVIGATE', { appName: 'SIDEBAR', location: { pathname: e.target.pathname } })
  }

  return <Wrapper>
    <List>
      <ListItem>
        <Icon src={home} />
        <a href="/" onClick={push}>Home</a>
      </ListItem>
      <ListItem gap>
        <Icon src={search} />
        <a href="/search" onClick={push}>Search</a>
      </ListItem>
    </List>
    <Divider />
    <List>
      {playlists?.map(item => (
      <ListItem key={item.id}>
        <a href={`/${item.id}`} onClick={push}>{item.name}</a>
      </ListItem>))}
    </List>
  </Wrapper>
}
