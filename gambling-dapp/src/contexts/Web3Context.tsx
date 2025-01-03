import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getContract, SimpleGamblingGameContract } from '../utils/contract.js';

export interface Web3ContextProps {
  provider: ethers.providers.Web3Provider | null;
  contract: SimpleGamblingGameContract | null;
  getLastWinners: () => Promise<string[]>;
  getCurrentRound: () => Promise<number>;
  placeBet: (number: number, amount: string) => Promise<void>;
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

interface Web3ProviderProps {
  children: React.ReactNode;
}

const checkNetwork = async (provider: ethers.providers.Web3Provider) => {
  const network = await provider.getNetwork();
  if (network.name !== 'homestead') {
    console.warn('ENS is not supported on this network:', network.name);
  }
};

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [contract, setContract] = useState<SimpleGamblingGameContract | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      try {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);
        const contractInstance = getContract(web3Provider);
        setContract(contractInstance);
        checkNetwork(web3Provider);
      } catch (error) {
        console.error('Error initializing Web3 provider:', error);
      }
    }
  }, []);

  const getLastWinners = async (): Promise<string[]> => {
    if (contract && contract.getLastWinners) {
      return await contract.getLastWinners();
    }
    throw new Error('getLastWinners function is not defined in the contract');
  };

  const getCurrentRound = async (): Promise<number> => {
    if (contract && contract.getCurrentRound) {
      return (await contract.getCurrentRound()).toNumber();
    }
    throw new Error('getCurrentRound function is not defined in the contract');
  };

  const placeBet = async (number: number, amount: string): Promise<void> => {
    if (contract && contract.placeBet) {
      const tx = await contract.placeBet(number, { value: ethers.utils.parseEther(amount) });
      await tx.wait();
    } else {
      throw new Error('placeBet function is not defined in the contract');
    }
  };

  return (
    <Web3Context.Provider value={{ provider, contract, getLastWinners, getCurrentRound, placeBet }}>
      {children}
    </Web3Context.Provider>
  );
};

export { Web3Context };