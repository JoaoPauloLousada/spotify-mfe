import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useListeners } from '../hooks/useListeners';
import { useOnNavigate } from '../hooks/useOnNavigate';
import { useSpotify } from '../hooks/useSpotify';
import LayoutDefault from '../components/Layouts/Default';

function Home() {
  useAuth();
  useSpotify();
  useListeners();
  useOnNavigate();

  return (
    <LayoutDefault>
      <Outlet />
    </LayoutDefault>
  );
}

export default Home;
