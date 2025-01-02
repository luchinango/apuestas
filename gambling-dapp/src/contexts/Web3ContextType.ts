import { ethers } from 'ethers';
import { SimpleGamblingGameContract } from '../utils/contract.ts';

export interface Web3ContextType {
  provider: ethers.providers.Web3Provider | null;
  contract: SimpleGamblingGameContract | null;
  getLastWinners: () => Promise<string[]>;
  getCurrentRound: () => Promise<number>;
  placeBet: (number: number, amount: string) => Promise<void>;
}