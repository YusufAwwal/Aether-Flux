'use client';

import React from 'react';
import { Card } from '../ui/Card';

const COMPARISON = [
  { platform: 'Lido', apy: 4.2, color: 'var(--accent-cyan)' },
  { platform: 'Aave', apy: 3.1, color: 'rgba(255,255,255,0.4)' },
  { platform: 'RocketPool', apy: 3.8, color: 'var(--accent-purple)' },
  { platform: 'Uniswap', apy: 12.5, color: 'var(--accent-cyan)' },
];

export const YieldComparison = () => {
  return (
    <Card title="MARKET YIELD RATES" subtitle="Cross-platform comparison (7D AVG)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {COMPARISON.map((item) => (
          <div key={item.platform}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{item.platform.toUpperCase()}</span>
              <span className="mono" style={{ color: '#10b981', fontWeight: 800 }}>{item.apy}%</span>
            </div>
            <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(item.apy / 15) * 100}%`, background: item.color }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
