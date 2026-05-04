'use client';

import React from 'react';
import { Layers } from 'lucide-react';
import styles from './ProtocolStats.module.css';

const DATA = [
  { name: 'Uniswap v3', vol: '$1.2B', fill: 85 },
  { name: 'Aave v3', vol: '$850M', fill: 65 },
  { name: 'Curve Finance', vol: '$420M', fill: 45 },
  { name: 'Lido', vol: '$2.4B', fill: 95 },
];

export const ProtocolStats = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Layers size={18} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>TOP PROTOCOLS</h3>
      </div>
      
      {DATA.map((item, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.info}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.vol}>{item.vol}</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: `${item.fill}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
