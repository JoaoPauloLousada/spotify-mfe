import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

const mount = ({ el }) => {
  ReactDOM.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>,
    el
  );
}

const el = document.getElementById('_dev-login-root');
const isStandalone = Boolean(el);
if (isStandalone) {
  mount({ el });
}

export { mount };
