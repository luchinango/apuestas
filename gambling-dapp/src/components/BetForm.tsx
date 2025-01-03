import React, { useState, useContext } from 'react';
import { Web3Context } from '../contexts/Web3Context.js';

const BetForm: React.FC = () => {
  const context = useContext(Web3Context);

  if (!context) {
    throw new Error('useContext must be used within a Web3Provider');
  }

  const { placeBet } = context;
  const [amount, setAmount] = useState<string>('');
  const [chosenNumber, setChosenNumber] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleBet = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Reemplazar comas por puntos
    const normalizedAmount = amount.replace(',', '.');
    const betAmount = parseFloat(normalizedAmount);
    if (isNaN(betAmount) || betAmount < 0.0001 || betAmount > 0.001) {
      setError('La apuesta debe estar entre 0.0001 y 0.001 ETH.');
      return;
    }

    const num = Number(chosenNumber);
    if (isNaN(num) || num < 0 || num > 15) {
      setError('Escoge un número entre 0 y 15.');
      return;
    }

    try {
      await placeBet(chosenNumber, normalizedAmount);
      setAmount('');
      setChosenNumber(0);
    } catch (err) {
      console.error(err); // Registrar el error en la consola
      setError('Falló la apuesta. Por favor intente de nuevo.');
    }
  };

  return (
    <div>
      <h2>Realiza tu apuesta</h2>
      <form onSubmit={handleBet}>
        <div>
          <label>
            Monto de la Apuesta (ETH):
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Escoge un número (0-15):
            <input
              type="number"
              value={chosenNumber}
              onChange={(e) => setChosenNumber(Number(e.target.value))}
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">¡Apostar!</button>
      </form>
    </div>
  );
};

export default BetForm;