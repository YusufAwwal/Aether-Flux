'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Wallet, LogOut, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ConnectWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = () => {
    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      setAddress('0x71C...4f2D');
      setIsConnecting(false);
    }, 1500);
  };

  const disconnect = () => {
    setAddress(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        {!address ? (
          <motion.div
            key="connect"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <Button 
              icon={<Wallet size={16} />} 
              onClick={connect}
              disabled={isConnecting}
            >
              {isConnecting ? 'CONNECTING...' : 'CONNECT WALLET'}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="address"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid var(--border-active)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={disconnect}
          >
            <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' }} />
            <span className="mono" style={{ fontSize: '0.875rem', fontWeight: 600 }}>{address}</span>
            <LogOut size={14} style={{ color: 'var(--text-dim)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
