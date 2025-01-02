import React from 'react';
import BetForm from '../components/BetForm.js';
import GameStatus from '../components/GameStatus.js';
import useWeb3 from '../hooks/useWeb3.js';

const Home: React.FC = () => {
  const { account, connectWallet, requestAccountsPermission, disconnectWallet } = useWeb3();

  return (
    <div>
      <header>
        <h2>Wallets y Cuentas</h2>
        <p>Paga y Gana!!!</p>
        <div>
          {!account && (
            <button onClick={connectWallet}>
              Conectar Wallet
            </button>
          )}

          {account && (
            <>
              <p>Conectado con: {account}</p>
              <button onClick={requestAccountsPermission}>
                Cambiar Cuenta
              </button>
              <button onClick={() => {
                disconnectWallet();
                connectWallet();
              }}>
                Desconectar y Conectar Otra Wallet
              </button>
            </>
          )}
        </div>
      </header>
      <BetForm />
      <GameStatus />
    </div>
  );
};

export default Home;