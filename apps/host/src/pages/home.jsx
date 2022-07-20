import React, { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
const HomeWrapper = lazy(() => import('../components/HomeWrapper'))

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeWrapper/>
      </Suspense>
    </ErrorBoundary>
  )
}
