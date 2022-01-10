import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

const mount = ({ el }) => {
  ReactDOM.render(
    <React.StrictMode>
      <Player />
    </React.StrictMode>,
    el
  );
}

const el = document.getElementById('_player-dev-root')
const isStandalone = Boolean(el);
if (isStandalone) {
  mount({ el })
}

export { mount }

