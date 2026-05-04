'use client';

import React from 'react';
import { useAccount, useChainId } from 'wagmi';
import { Activity, Shield, Wifi } from 'lucide-react';

export const Footer = () => {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();

  return (
    <footer style={{ 
      borderTop: 'var(--glass-border)', 
      background: 'rgba(0, 0, 0, 0.5)', 
      backdropFilter: 'blur(10px)', 
      padding: '0.75rem 2rem', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: '260px', // Sidebar width
      zIndex: 50,
      fontSize: '0.625rem',
      color: 'var(--text-dim)',
      letterSpacing: '0.1em'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          <span>NETWORK: {chainId === 1 ? 'MAINNET' : 'LOCAL_NODE'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={12} color="var(--accent-cyan)" />
          <span>LATENCY: 12ms</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={12} color="var(--accent-purple)" />
          <span>SECURITY_LEVEL: MAXIMUM</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Wifi size={12} />
          <span>API: SYNCHRONIZED</span>
        </div>
        {isConnected && (
          <div style={{ fontWeight: 800, color: 'var(--text-primary)' }}>
            USER_ADDRESS: {address?.slice(0, 6)}...{address?.slice(-4)}
          </div>
        )}
      </div>
    </footer>
  );
};
