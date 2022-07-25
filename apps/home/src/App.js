import React, { useEffect } from 'react'
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Home from '../components/Home'
import Playlist from '../components/Playlist';

export const Dependencies = React.createContext({})

export default function App({ spotify, history, eventBus, onMounted, theme }) {
  history.listen((location) => {
    eventBus.dispatch('CHILD_APP:NAVIGATE', { appName: 'HOME', location })
  })

  useEffect(() => {
    const callback = ({ detail: location }) => {
      if (history.location.pathname !== location.pathname) {
        history.push(location.pathname)
      }
    }
    eventBus.on('PARENT_APP:NAVIGATE', callback)

    onMounted?.()

    return () => eventBus.remove('PARENT_APP:NAVIGATE', callback)
  }, [])

  return (
    <Dependencies.Provider value={{ spotify, eventBus }}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Dependencies.Provider>
  )
}