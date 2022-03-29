import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

// pages
import HomePage from './pages/home';
import UserHomePage from './pages/user-home';
import ErrorPage from './pages/error';

import BlockLoader from './components/block-loader';
import {useUserContext} from './contexts/user.context';

interface AppProps {}

const UserDashobard = () => <h1>User dashboard</h1>;
const HRDashobard = () => <h1>HR dashboard</h1>;

const App: React.FC<AppProps> = () => {
  const {loading} = useUserContext();
  return (
    <HashRouter>
      {loading && <BlockLoader />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/organisation/:orgName/dashboard' element={<HRDashobard />} />
        <Route path='/organisation/:orgName/user' element={<UserHomePage />} />
        <Route path='/user/dashboard' element={<UserDashobard />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
