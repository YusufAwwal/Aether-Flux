'use client';

import React from 'react';
import { Card } from '../ui/Card';

const TVL_DATA = [
  { name: 'Lido', value: 45, color: 'var(--accent-cyan)' },
  { name: 'Aave', value: 25, color: 'var(--accent-purple)' },
  { name: 'Uniswap', value: 20, color: 'rgba(255,255,255,0.4)' },
  { name: 'Others', value: 10, color: 'rgba(255,255,255,0.1)' },
];

export const YieldTVL = () => {
  return (
    <Card title="TVL DISTRIBUTION" subtitle="Global capital allocation">
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: `conic-gradient(
            ${TVL_DATA[0].color} 0% 45%, 
            ${TVL_DATA[1].color} 45% 70%, 
            ${TVL_DATA[2].color} 70% 90%, 
            ${TVL_DATA[3].color} 90% 100%
          )`,
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', inset: '15%', background: 'var(--bg-card)', borderRadius: '50%' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {TVL_DATA.map(item => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: item.color }} />
              <span style={{ color: 'var(--text-dim)' }}>{item.name}</span>
              <span className="mono" style={{ marginLeft: 'auto', fontWeight: 700 }}>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
