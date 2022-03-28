import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {SwitchContextProvider} from './contexts/switch.context';
import {APIContextProvider} from './contexts/api.context';
import {UserContextProvider} from './contexts/user.context';
import {SocketContextProvider} from './contexts/socket.context';

ReactDOM.render(
  <React.StrictMode>
    <SwitchContextProvider>
      <APIContextProvider>
        <UserContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </UserContextProvider>
      </APIContextProvider>
    </SwitchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
