import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

// pages
import HomePage from './pages/home';
import UserHomePage from './pages/user-home';

import BlockLoader from './components/block-loader';
import {useUserContext} from './contexts/user.context';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {loading} = useUserContext();
  return (
    <HashRouter>
      {loading && <BlockLoader />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/organisation/:orgName/user' element={<UserHomePage />} />
        <Route path="/*" element={() => <h1>404</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
