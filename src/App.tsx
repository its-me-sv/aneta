import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

// pages
import HomePage from './pages/home';
import UserHomePage from './pages/user-home';
import UserDashboardPage from './pages/user-dashboard';
import HRDashboardPage from './pages/hr-dashboard';
import UserChatPage from './pages/user-chat';
import HRChatPage from './pages/hr-chat';
import FinancialPage from './pages/financial-page';
import ErrorPage from './pages/error';
import HRSettingsPage from './pages/hr-settings';
import HRResourcesPage from './pages/hr-resources';
import HRProjectsPage from './pages/hr-projects';

import BlockLoader from './components/block-loader';
import {useUserContext} from './contexts/user.context';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {loading} = useUserContext();
  return (
    <HashRouter>
      {loading && <BlockLoader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/organisation/:orgName/dashboard"
          element={<HRDashboardPage />}
        />
        <Route path="/organisation/:orgName/chat" element={<HRChatPage />} />
        <Route
          path="/organisation/:orgName/projects"
          element={<HRProjectsPage />}
        />
        <Route
          path="/organisation/:orgName/resources"
          element={<HRResourcesPage />}
        />
        <Route
          path="/organisation/:orgName/financial"
          element={<FinancialPage />}
        />
        <Route
          path="/organisation/:orgName/settings"
          element={<HRSettingsPage />}
        />
        <Route path="/organisation/:orgName/user" element={<UserHomePage />} />
        <Route path="/user/dashboard" element={<UserDashboardPage />} />
        <Route path="/user/chat" element={<UserChatPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
