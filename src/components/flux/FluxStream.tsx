'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Activity } from 'lucide-react';
import styles from './FluxStream.module.css';

interface Transaction {
  id: string;
  hash: string;
  method: string;
  value: string;
  type: 'in' | 'out';
}

export const FluxStream = () => {
  const [txs, setTxs] = useState<Transaction[]>([
    { id: '1', hash: '0x4a2...f89', method: 'Swap', value: '1.2 ETH', type: 'out' },
    { id: '2', hash: '0x71c...4f2', method: 'Transfer', value: '500 USDT', type: 'in' },
    { id: '3', hash: '0x9d2...a11', method: 'Mint', value: '0.05 ETH', type: 'out' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTx: Transaction = {
        id: Math.random().toString(36),
        hash: `0x${Math.random().toString(16).slice(2, 5)}...${Math.random().toString(16).slice(2, 5)}`,
        method: ['Swap', 'Transfer', 'Mint', 'Approve'][Math.floor(Math.random() * 4)],
        value: `${(Math.random() * 2).toFixed(2)} ETH`,
        type: Math.random() > 0.5 ? 'in' : 'out',
      };
      setTxs(prev => [newTx, ...prev.slice(0, 9)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={18} color="var(--accent-cyan)" />
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>FLUX STREAM</h3>
        </div>
        <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>LIVE_FEED</span>
      </div>
      <div className={styles.list}>
        <AnimatePresence initial={false}>
          {txs.map((tx) => (
            <motion.div
              key={tx.id}
              className={styles.item}
              initial={{ opacity: 0, height: 0, x: -20 }}
              animate={{ opacity: 1, height: 'auto', x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <div className={styles.icon}>
                {tx.type === 'out' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
              </div>
              <span className={styles.hash}>{tx.hash}</span>
              <span className={styles.method}>{tx.method.toUpperCase()}</span>
              <span className={styles.value} style={{ color: tx.type === 'in' ? '#10b981' : 'var(--text-primary)' }}>
                {tx.type === 'in' ? '+' : '-'}{tx.value}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
