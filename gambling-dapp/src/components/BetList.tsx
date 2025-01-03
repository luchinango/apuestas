import React, { useEffect, useState, useContext } from 'react';
import { Web3Context } from '../contexts/Web3Context.js';

const BetList: React.FC = () => {
  const context = useContext(Web3Context);

  if (!context) {
    throw new Error('useContext must be used within a Web3Provider');
  }

  const { getBets } = context;
  const [bets, setBets] = useState<{ player: string; amount: string; chosenNumber: number }[]>([]);

  useEffect(() => {
    const fetchBets = async () => {
      try {
        const bets = await getBets();
        setBets(bets);
      } catch (error) {
        console.error('Error fetching bets:', error);
      }
    };

    fetchBets();
  }, [getBets]);

  return (
    <div>
      <h2>Apuestas Realizadas</h2>
      <ul>
        {bets.map((bet, index) => (
          <li key={index}>
            Jugador: {bet.player}, Monto: {bet.amount} ETH, Número Elegido: {bet.chosenNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BetList;