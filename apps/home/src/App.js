import React, { useEffect } from 'react'
import {
  Router,
  Route,
  Switch
} from "react-router-dom";

import Home from '../components/Home'
import Playlist from '../components/Playlist';

export const Dependencies = React.createContext({})

export default function App({ spotify, history, eventBus, onMounted }) {
  history.listen((location) => {
    eventBus.dispatch('CHILD_APP:NAVIGATE', { appName: 'HOME', location })
  })

  useEffect(() => {
    const callback = ({ detail: location }) => {
      if (history.location.pathname !== location.pathname) {
        console.log('PARENT_APP:NAVIGATE', location, history.location)
        history.push(location.pathname)
      }
    }
    eventBus.on('PARENT_APP:NAVIGATE', callback)

    onMounted?.()

    return () => eventBus.remove('PARENT_APP:NAVIGATE', callback)
  }, [])

  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <Router history={history}>
        <Switch>
          <Route exact path="/:id">
            <Playlist />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Dependencies.Provider>
  )
}