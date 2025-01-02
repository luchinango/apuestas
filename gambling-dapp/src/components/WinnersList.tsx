import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from '../../../gambling-dapp/src/utils/contract.ts'; // Ajusta la ruta a tu archivo 'contracts.ts'

// Definimos una interfaz para el objeto `ethereum`
interface Ethereum {
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
}

// Este componente se encarga de mostrar la lista de ganadores.
export function WinnersList() {
  const [winners, setWinners] = useState<string[]>([]);

  useEffect(() => {
    // Encerramos en una función asíncrona
    const fetchWinners = async () => {
      try {
        // En ethers v5, obtienes el provider de Metamask así:
        const { ethereum } = window as unknown as { ethereum: Ethereum };
        const provider = new ethers.providers.Web3Provider(ethereum);

        // Obtenemos la instancia del contrato
        const contract = getContract(provider);

        // Llamamos a getLastWinnersCount() (BigNumber) y convertimos a number
        const totalWinnersBn = await contract.getLastWinnersCount();
        const totalWinners = totalWinnersBn.toNumber();

        const tempWinners: string[] = [];
        for (let i = 0; i < totalWinners; i++) {
          const w = await contract.lastWinners(i);
          tempWinners.push(w);
        }

        setWinners(tempWinners);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWinners();
  }, []);

  return (
    <div>
      <h2>Lista de Ganadores</h2>
      <ul>
        {winners.map((winner, index) => (
          <li key={index}>{winner}</li>
        ))}
      </ul>
    </div>
  );
}