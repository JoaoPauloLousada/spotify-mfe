import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import ErrorBoundary from '../ErrorBoundary'

const SidebarWrapper = lazy(() => import('../SidebarWrapper'))

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr 100px;
  height: 100vh;
  width: 100vw;
`


export default function Layout() {
  return (
    <Wrapper>
      <div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <SidebarWrapper />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        Content
      </div>
      <div style={{gridColumn: '1 / 3'}}>
        The Player
      </div>
    </Wrapper>
  )
}
