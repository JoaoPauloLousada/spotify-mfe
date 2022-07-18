import React, { Suspense } from 'react'
import styled from 'styled-components'
import ErrorBoundary from '../components/ErrorBoundary'
import HomeWrapper from '../components/HomeWrapper'
import Layout from '../components/Layout'

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
