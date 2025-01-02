import React from 'react';
import { Web3Provider } from './contexts/Web3Context.js';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import { WinnersList } from './components/WinnersList.tsx';

const App: React.FC = () => {
    return (
        <Web3Provider>
            <Header />
            <Home />
            <WinnersList />
        </Web3Provider>
    );
};

export default App;