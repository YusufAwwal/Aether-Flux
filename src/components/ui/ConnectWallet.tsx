'use client';

import React from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { Wallet, LogOut, Loader2 } from 'lucide-react';
import { Button } from './Button';

export const ConnectWallet = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  if (isConnected && address) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ textAlign: 'right', marginRight: '0.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {address.slice(0, 6)}...{address.slice(-4)}
          </div>
          <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
            {balance?.formatted.slice(0, 6)} {balance?.symbol}
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={() => disconnect()}
          icon={<LogOut size={16} />}
        >
          LOG OUT
        </Button>
      </div>
    );
  }

  return (
    <Button 
      variant="primary" 
      onClick={() => connect({ connector: connectors[0] })}
      disabled={isConnecting}
      icon={isConnecting ? <Loader2 size={16} className="animate-spin" /> : <Wallet size={16} />}
    >
      {isConnecting ? 'HANDSHAKE...' : 'CONNECT_HUB'}
    </Button>
  );
};
