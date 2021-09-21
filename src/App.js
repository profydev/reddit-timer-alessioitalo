import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <MarketingPage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
