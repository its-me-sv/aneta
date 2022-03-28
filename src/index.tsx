import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {SwitchContextProvider} from './contexts/switch.context';

ReactDOM.render(
  <React.StrictMode>
    <SwitchContextProvider>
      <App />
    </SwitchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
