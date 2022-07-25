import React, { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Loading from '../components/Loading'
const HomeWrapper = lazy(() => import('../components/HomeWrapper'))

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading/>}>
        <HomeWrapper/>
      </Suspense>
    </ErrorBoundary>
  )
}
