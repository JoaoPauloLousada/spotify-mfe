import React, { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Layout from '../components/Layout'
const HomeWrapper = lazy(() => import('../components/HomeWrapper'))

export default function Home() {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeWrapper/>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
