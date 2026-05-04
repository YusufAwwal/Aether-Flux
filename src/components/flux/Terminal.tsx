'use client';

import React, { useState, useEffect } from 'react';
import styles from './Terminal.module.css';

const INITIAL_LOGS = [
  { type: 'info', msg: 'Aether OS v1.0.4 initialized.' },
  { type: 'info', msg: 'Kernel: Linux 6.2.0-web3-aether' },
  { type: 'success', msg: 'Secure handshake established with ETH-MAINNET.' },
];

export const Terminal = () => {
  const [logs, setLogs] = useState(INITIAL_LOGS);

  useEffect(() => {
    const interval = setInterval(() => {
      const types: ('success' | 'error' | 'info' | 'warning')[] = ['success', 'info', 'warning'];
      const messages = [
        'Incoming transaction: 0x4a2...f89',
        'Block 18,492,021 validated.',
        'Gas spike detected: 42 Gwei',
        'Whale alert: 500 ETH moved from Kraken',
        'Mempool scan complete: 120 new tx',
        'Peer sync: 12 active nodes connected'
      ];
      
      const newLog = {
        type: types[Math.floor(Math.random() * types.length)],
        msg: messages[Math.floor(Math.random() * messages.length)]
      };

      setLogs(prev => [...prev.slice(-15), newLog]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.dot} style={{ background: '#ef4444' }} />
        <div className={styles.dot} style={{ background: '#f59e0b' }} />
        <div className={styles.dot} style={{ background: '#10b981' }} />
        <span style={{ marginLeft: '0.5rem', color: 'var(--text-dim)' }}>NETWORK_LOGS.EXE</span>
      </div>
      <div style={{ flex: 1, overflowY: 'hidden' }}>
        {logs.map((log, i) => (
          <div key={i} className={styles.logLine}>
            <span className={styles.timestamp}>[{new Date().toLocaleTimeString()}]</span>
            <span className={styles[log.type]}>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
