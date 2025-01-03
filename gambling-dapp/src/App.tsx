import React from 'react';
import { Web3Provider } from './contexts/Web3Context.js';
import Home from './pages/Home.js';
import Header from './components/Header.js';

const App: React.FC = () => {
  return (
    <Web3Provider>
      <Header />
      <Home />
    </Web3Provider>
  );
};

export default App;