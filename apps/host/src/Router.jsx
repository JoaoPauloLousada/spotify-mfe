import React, { lazy, Suspense, useCallback, useContext, useEffect } from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import { Dependencies } from './bootstrap';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Loading from './components/Loading';
import Home from './pages/home';
const Search = lazy(() => import('./pages/Search'))

export default function Router() {
  const { eventBus } = useContext(Dependencies)
  const history = useHistory();
  
  const push = useCallback((appName, nextPath) => {
    if (history.location.pathname !== nextPath) {
      history.push(nextPath)
    }
  }, [])

  useEffect(() => {
    const callback = (event) => {
      push(event.detail.appName, event.detail.location.pathname)
    }

    eventBus.on('CHILD_APP:NAVIGATE', callback);

    history.listen((location) => eventBus.dispatch('PARENT_APP:NAVIGATE', location))

    return () => eventBus.remove('CHILD_APP:NAVIGATE', callback)
  }, [])

  return (
    <Layout>
      <Switch>
        <Route path="/search">
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Search />
            </Suspense>
          </ErrorBoundary>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  )
}
