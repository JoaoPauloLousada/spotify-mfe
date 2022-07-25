import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import ErrorBoundary from '../ErrorBoundary'
import Loading from '../Loading'

const SidebarWrapper = lazy(() => import('../SidebarWrapper'))
const SongControllerWrapper = lazy(() => import('../SongControllerWrapper'))

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: calc(100vh - 80px) 80px;
  height: 100vh;
  width: 100vw;
`

export default function Layout({children}) {
  return (
    <Wrapper>
      <div>
        <ErrorBoundary>
          <Suspense fallback={<Loading/>}>
            <SidebarWrapper />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        {children}
      </div>
      <div style={{gridColumn: '1 / 3'}}>
        <ErrorBoundary>
          <Suspense fallback={<Loading/>}>
            <SongControllerWrapper />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Wrapper>
  )
}
