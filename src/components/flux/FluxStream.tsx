'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Activity, ExternalLink } from 'lucide-react';
import { Modal } from '../ui/Modal';
import styles from './FluxStream.module.css';

interface Transaction {
  id: string;
  hash: string;
  method: string;
  value: string;
  type: 'in' | 'out';
  from?: string;
  to?: string;
  timestamp?: string;
}

export const FluxStream = () => {
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [txs, setTxs] = useState<Transaction[]>([
    { id: '1', hash: '0x4a2...f89', method: 'Swap', value: '1.2 ETH', type: 'out', from: '0x123...abc', to: '0x456...def', timestamp: new Date().toISOString() },
    { id: '2', hash: '0x71c...4f2', method: 'Transfer', value: '500 USDT', type: 'in', from: '0x789...ghi', to: '0x123...abc', timestamp: new Date().toISOString() },
    { id: '3', hash: '0x9d2...a11', method: 'Mint', value: '0.05 ETH', type: 'out', from: '0x000...000', to: '0x123...abc', timestamp: new Date().toISOString() },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTx: Transaction = {
        id: Math.random().toString(36),
        hash: `0x${Math.random().toString(16).slice(2, 5)}...${Math.random().toString(16).slice(2, 5)}`,
        method: ['Swap', 'Transfer', 'Mint', 'Approve'][Math.floor(Math.random() * 4)],
        value: `${(Math.random() * 2).toFixed(2)} ETH`,
        type: Math.random() > 0.5 ? 'in' : 'out',
        from: '0x' + Math.random().toString(16).slice(2, 10),
        to: '0x' + Math.random().toString(16).slice(2, 10),
        timestamp: new Date().toISOString(),
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
              style={{ cursor: 'pointer' }}
              initial={{ opacity: 0, height: 0, x: -20 }}
              animate={{ opacity: 1, height: 'auto', x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              onClick={() => setSelectedTx(tx)}
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

      <Modal 
        isOpen={!!selectedTx} 
        onClose={() => setSelectedTx(null)} 
        title="Transaction Details"
      >
        {selectedTx && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className={styles.icon}>
                  {selectedTx.type === 'out' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>METHOD</div>
                  <div style={{ fontWeight: 600 }}>{selectedTx.method}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>VALUE</div>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', color: selectedTx.type === 'in' ? '#10b981' : 'var(--text-primary)' }}>
                  {selectedTx.type === 'in' ? '+' : '-'}{selectedTx.value}
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>TRANSACTION HASH</div>
                <div className="mono" style={{ fontSize: '0.875rem', wordBreak: 'break-all' }}>{selectedTx.hash}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>FROM</div>
                  <div className="mono" style={{ fontSize: '0.75rem' }}>{selectedTx.from}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>TO</div>
                  <div className="mono" style={{ fontSize: '0.75rem' }}>{selectedTx.to}</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ flex: 1, padding: '0.75rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <ExternalLink size={14} /> VIEW ON ETHERSCAN
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
