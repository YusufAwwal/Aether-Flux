'use client';

import React from 'react';
import styles from './GasHeatmap.module.css';

export const GasHeatmap = () => {
  const cells = Array.from({ length: 168 }, () => Math.random()); // 24 hours * 7 days

  const getColor = (val: number) => {
    if (val < 0.3) return 'rgba(0, 240, 255, 0.1)';
    if (val < 0.6) return 'rgba(0, 240, 255, 0.4)';
    if (val < 0.8) return 'rgba(112, 0, 255, 0.6)';
    return 'var(--accent-purple)';
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>WEEKLY GAS VOLATILITY</h4>
        <span className="mono" style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>7D_HISTORICAL</span>
      </div>
      <div className={styles.grid}>
        {cells.map((val, i) => (
          <div 
            key={i} 
            className={styles.cell} 
            style={{ background: getColor(val) }}
            title={`Gas: ${Math.floor(val * 100)} Gwei`}
          />
        ))}
      </div>
      <div className={styles.legend}>
        <span>LOW TRAFFIC</span>
        <span>PEAK DEMAND</span>
      </div>
    </div>
  );
};
