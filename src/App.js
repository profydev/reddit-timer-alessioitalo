import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
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
