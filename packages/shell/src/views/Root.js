import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useListeners } from '../hooks/useListeners';
import { useOnNavigate } from '../hooks/useOnNavigate';
import { useSpotify } from '../hooks/useSpotify';
import LayoutDefault from '../components/Layouts/Default';
import ErrorBoundary from '../components/Error';

function Home() {
  useAuth();
  useSpotify();
  useListeners();
  useOnNavigate();

  return (
    <ErrorBoundary>
      <Suspense fallback={<>Loading Component..</>}>
        <LayoutDefault>
          <Outlet />
        </LayoutDefault>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Home;
