import { useContext, useState, useEffect } from 'react';
import { Web3Provider, ExternalProvider } from '@ethersproject/providers';
import { Web3Context } from '../contexts/Web3Context.js';

declare global {
  interface Window {
    ethereum?: ExternalProvider & {
      request?: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, handler: (...args: unknown[]) => void) => void;
    };
  }
}

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }

  const [provider, setProvider] = useState<Web3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const web3Provider = new Web3Provider(window.ethereum);
      setProvider(web3Provider);

      window.ethereum?.on?.('accountsChanged', (accounts: unknown) => {
        const accountArray = accounts as string[];
        if (accountArray.length > 0) {
          setAccount(accountArray[0]);
        } else {
          setAccount(null);
        }
      });

      window.ethereum?.on?.('chainChanged', () => {
        window.location.reload();
      });
    }
  }, []);

  const connectWallet = async () => {
    if (provider) {
      try {
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    }
  };

  const requestAccountsPermission = async () => {
    if (typeof window !== 'undefined' && window.ethereum?.request) {
      try {
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }]
        });
        await connectWallet();
      } catch (error) {
        console.error('Error requesting accounts permission:', error);
      }
    }
  };

  const disconnectWallet = () => {
    setProvider(null);
    setAccount(null);
  };

  return { ...context, provider, account, connectWallet, requestAccountsPermission, disconnectWallet };
};

export default useWeb3;