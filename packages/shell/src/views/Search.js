import React, { Suspense } from 'react';
import ErrorBoundary from '../components/Error';
import { useAuth } from '../hooks/useAuth';
import { useListeners } from '../hooks/useListeners';
import { useOnNavigate } from '../hooks/useOnNavigate';
import { useSpotify } from '../hooks/useSpotify';

export default function Search() {
  useAuth();
  useSpotify();
  useListeners();
  useOnNavigate();

  return (
    <div>
      search page
    </div>
  )
}
