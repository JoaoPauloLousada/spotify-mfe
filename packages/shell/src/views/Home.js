import React, { Suspense } from 'react';
import ErrorBoundary from '../components/Error';
import { useAuth } from '../hooks/useAuth';
import { useListeners } from '../hooks/useListeners';
import { useSpotify } from '../hooks/useSpotify';

const Sidebar = React.lazy(() => import('sidebar/Sidebar'))
const Player = React.lazy(() => import('player/Player'))

function Home() {
  useAuth();
  useSpotify();
  useListeners();

  return (
    <div className="App">
      <div className='h-screen w-screen flex flex-col bg-yellow-700'>
        <div className='grid grid-cols-12 flex-grow'>
          <div className='bg-yellow-300 col-span-2'>
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <Sidebar />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className='bg-blue-300 col-span-8'>
            content [shell]
          </div>
          <div className='bg-green-200 col-span-2'>
            activity area [shell]
          </div>

        </div>
        <div className='bg-purple-200 col-span-12 h-20'>
          footer [shell]
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <Player />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default Home;
