'use client';

import React from 'react';
import { Card } from '../ui/Card';

const DATA = [
  { name: 'ETH', value: 52, color: 'var(--accent-cyan)' },
  { name: 'STABLES', value: 24, color: 'var(--accent-purple)' },
  { name: 'DEFI', value: 15, color: 'rgba(255,255,255,0.4)' },
  { name: 'OTHER', value: 9, color: 'rgba(255,255,255,0.1)' },
];

export const MarketDominance = () => {
  return (
    <Card className="glass" style={{ padding: '1.5rem' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>MARKET DOMINANCE</h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'conic-gradient(var(--accent-cyan) 0% 52%, var(--accent-purple) 52% 76%, rgba(255,255,255,0.4) 76% 91%, rgba(255,255,255,0.1) 91% 100%)' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {DATA.map((item) => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.name}</span>
              </div>
              <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
