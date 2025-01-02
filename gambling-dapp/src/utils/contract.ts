import { ethers } from 'ethers';
import SimpleGamblingGameArtifact from '../../../gambling-game/artifacts/contracts/SimpleGamblingGame.sol/SimpleGamblingGame.json' assert { type: 'json' };

// REEMPLAZA con la dirección real donde desplegaste el contrato en localhost
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Dirección real del contrato desplegado

export interface SimpleGamblingGameMethods {
  getLastWinners(): Promise<string[]>;
  getCurrentRound(): Promise<ethers.BigNumber>;
  placeBet(number: number, options?: ethers.PayableOverrides): Promise<ethers.ContractTransaction>;
}

export type SimpleGamblingGameContract = ethers.Contract & SimpleGamblingGameMethods;

/**
 * Retorna una instancia de ethers.Contract 
 * con tipado parcial (para llamar métodos del contrato).
 */
export const getContract = (provider: ethers.providers.Web3Provider): SimpleGamblingGameContract => {
  const signer = provider.getSigner();
  return new ethers.Contract(
    contractAddress, 
    SimpleGamblingGameArtifact.abi, 
    signer
  ) as SimpleGamblingGameContract;
};