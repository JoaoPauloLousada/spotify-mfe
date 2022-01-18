import React, { Suspense } from 'react'
import ErrorBoundary from '../Error'
const Sidebar = React.lazy(() => import('../Sidebar'));
const FooterPlayer = React.lazy(() => import('../FooterPlayer'));

export default function LayoutDefault({ children }) {
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
          <div className='overflow-hidden col-span-4 lg:col-span-6 xl:col-span-8 bg-neutral-900'>
            {children}
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
  )
}
