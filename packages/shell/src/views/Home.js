import React, { Suspense } from 'react';
import ContentArea from '../components/ContentArea';
import ErrorBoundary from '../components/Error';
import { useAuth } from '../hooks/useAuth';
import { useListeners } from '../hooks/useListeners';
import { useSpotify } from '../hooks/useSpotify';

const Sidebar = React.lazy(() => import('../components/Sidebar'));
const FooterPlayer = React.lazy(() => import('../components/FooterPlayer'));

function Home() {
  useAuth();
  useSpotify();
  useListeners();

  return (
    <div className="App">
      <div className='h-screen w-screen flex flex-col bg-black text-white'>
        <div className='grid grid-cols-12 flex-grow h-full overflow-hidden'>
          <div className='col-span-4 lg:col-span-3 xl:col-span-2'>
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <Sidebar />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className='col-span-4 lg:col-span-6 xl:col-span-8 bg-neutral-900'>
            <ContentArea />
          </div>
          <div className='col-span-4 lg:col-span-3 xl:col-span-2'>
            activity area [shell]
          </div>

        </div>
        <div className='col-span-12 h-20'>
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <FooterPlayer />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default Home;
