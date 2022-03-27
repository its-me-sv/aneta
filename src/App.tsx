import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={() => <h1>404</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
