import React, { useEffect, useState, useContext } from 'react';
import { Web3Context } from '../contexts/Web3Context.js';

const GameStatus: React.FC = () => {
  const context = useContext(Web3Context);

  if (!context) {
    throw new Error('useContext must be used within a Web3Provider');
  }

  const { getLastWinners, getCurrentRound } = context;
  const [lastWinners, setLastWinners] = useState<string[]>([]);
  const [currentRound, setCurrentRound] = useState<number>(0);

  useEffect(() => {
    const fetchGameStatus = async () => {
      try {
        const winners = await getLastWinners();
        const round = await getCurrentRound();
        setLastWinners(winners);
        setCurrentRound(round);
      } catch (error) {
        console.error('Error fetching game status:', error);
      }
    };

    fetchGameStatus();
  }, [getLastWinners, getCurrentRound]);

  return (
    <div>
      <h2>Estado del Juego</h2>
      <p>Round Actual: {currentRound}</p>
      <h3>Últimos ganadores:</h3>
      <ul>
        {lastWinners.map((winner, index) => (
          <li key={index}>{winner}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameStatus;