import { useContext } from 'react';
import { Web3Context } from './Web3Context.js';
import type { Web3ContextType } from './Web3ContextType.ts';

export const useWeb3Context = (): Web3ContextType => {
    const context = useContext(Web3Context);
    if (context === undefined) {
        throw new Error('useWeb3Context must be used within a Web3Provider');
    }
    return context;
};