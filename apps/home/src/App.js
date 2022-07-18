import React from 'react'
import {
  Router,
  Route,
  Switch
} from "react-router-dom";

import Home from '../components/Home'
import Playlist from '../components/Playlist';

export const Dependencies = React.createContext({})

export default function App({ spotify, history }) {
  return (
    <Dependencies.Provider value={{ spotify }}>
      <Router history={history} location={history.location}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Playlist />
          </Route>
        </Switch>
      </Router>
    </Dependencies.Provider>
  )
}