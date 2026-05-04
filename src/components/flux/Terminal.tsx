'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import styles from './Terminal.module.css';

const LOGS = [
  'Validating transaction block...',
  'Node 12,842 synchronized successfully.',
  'Uniswap v3 liquidity flux: +1.2 ETH',
  'Whale alert detected: $45M USDC',
  'Garbage collection complete. Memory optimal.',
  'New block minted (Height: 18,492,021)',
];

export const Terminal = () => {
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = LOGS[Math.floor(Math.random() * LOGS.length)];
      const timestamp = new Date().toLocaleTimeString();
      const pid = Math.floor(Math.random() * 9000) + 1000;
      setActiveLogs(prev => [`[${timestamp}] [PID:${pid}] ${newLog}`, ...prev.slice(0, 49)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TerminalIcon size={16} color="var(--accent-cyan)" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, marginLeft: '0.5rem' }}>SYSTEM_TERMINAL</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
        </div>
      </div>
      <div className={styles.body} ref={scrollRef}>
        {activeLogs.map((log, i) => (
          <div key={i} className={styles.logLine}>
            <span className={styles.prompt} style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>&gt;</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
