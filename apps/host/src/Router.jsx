import React, { useCallback, useContext, useEffect } from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import { Dependencies } from './bootstrap';
import Home from './pages/home';


export default function Router() {
  const { eventBus } = useContext(Dependencies)
  const history = useHistory();
  
  const push = useCallback((appName, route) => {
    const routePrefix = new Map([
      ['HOME', '']
    ])

    if (routePrefix.has(appName)) {
      const nextPath = `${routePrefix.get(appName)}${route}`
      if (history.location.pathname !== nextPath) {
        history.push(nextPath)
      }
    }
  }, [])

  useEffect(() => {
    const callback = (event) => {
      console.log('CHILD_APP:NAVIGATE', event.detail.location.pathname);
      push(event.detail.appName, event.detail.location.pathname)
    }

    eventBus.on('CHILD_APP:NAVIGATE', callback);

    history.listen((location) => eventBus.dispatch('PARENT_APP:NAVIGATE', location))

    return () => eventBus.remove('CHILD_APP:NAVIGATE', callback)
  }, [])

  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
