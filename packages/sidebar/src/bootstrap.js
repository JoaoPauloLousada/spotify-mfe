import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

const mount = ({ el }) => {
  console.log('mount sidebar', el);
  ReactDOM.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>,
    el
  );
}

const el = document.getElementById('_sidebar-dev-root')
const isStandalone = Boolean(el);
if (isStandalone) {
  import('./global.css');
  mount({ el })
}

export { mount }