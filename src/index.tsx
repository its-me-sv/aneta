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
import {ResourcesContextProvider} from "./contexts/resources.context";

ReactDOM.render(
  <React.StrictMode>
    <SwitchContextProvider>
      <APIContextProvider>
        <SocketContextProvider>
          <OrganisationContextProvider>
            <UserContextProvider>
              <UserNavContextProvider>
                <ResourcesContextProvider>
                  <App />
                </ResourcesContextProvider>
              </UserNavContextProvider>
            </UserContextProvider>
          </OrganisationContextProvider>
        </SocketContextProvider>
      </APIContextProvider>
    </SwitchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
