import React from 'react';
import { Route } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Route path="/" exact>
        <MarketingPage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
    </>
  );
}

export default App;
