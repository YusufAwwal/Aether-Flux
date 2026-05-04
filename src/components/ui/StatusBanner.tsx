'use client';

import React from 'react';
import styles from './StatusBanner.module.css';

const DATA = [
  { label: 'ETH', value: '$2,482.12' },
  { label: 'GAS', value: '24 GWEI' },
  { label: 'TPS', value: '1,420' },
  { label: 'NODES', value: '12,842' },
  { label: 'UPTIME', value: '99.98%' },
  { label: 'BLOCK', value: '18,492,021' },
];

export const StatusBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.ticker}>
        {[...DATA, ...DATA].map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.label}>{item.label}:</span>
            <span className={styles.value}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
