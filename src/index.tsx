import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {SwitchContextProvider} from './contexts/switch.context';
import {APIContextProvider} from './contexts/api.context';
import {OrganisationContextProvider} from "./contexts/organisation.context";
import {UserContextProvider} from './contexts/user.context';
import {SocketContextProvider} from './contexts/socket.context';
import {UserNavContextProvider} from './contexts/user-nav.context';

ReactDOM.render(
  <React.StrictMode>
    <SwitchContextProvider>
      <APIContextProvider>
        <OrganisationContextProvider>
          <UserContextProvider>
            <SocketContextProvider>
              <UserNavContextProvider>
                <App />
              </UserNavContextProvider>
            </SocketContextProvider>
          </UserContextProvider>
        </OrganisationContextProvider>
      </APIContextProvider>
    </SwitchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
