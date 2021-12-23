import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import reportWebVitals from './reportWebVitals';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
