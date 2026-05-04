'use client';

import React from 'react';
import { Card } from '../ui/Card';

const DATA = [
  { chain: 'Ethereum', sentiment: 0.8, volume: 'High' },
  { chain: 'Polygon', sentiment: 0.6, volume: 'Medium' },
  { chain: 'Arbitrum', sentiment: 0.9, volume: 'High' },
  { chain: 'Optimism', sentiment: 0.7, volume: 'Medium' },
  { chain: 'Base', sentiment: 0.5, volume: 'Low' },
  { chain: 'Solana', sentiment: 0.4, volume: 'High' },
];

export const SentimentHeatmap = () => {
  return (
    <Card title="SENTIMENT HEATMAP" subtitle="Neural scan across L1/L2 networks">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
        {DATA.map((item) => (
          <div key={item.chain} style={{ 
            padding: '1rem', 
            background: `rgba(0, 240, 255, ${item.sentiment * 0.2})`, 
            border: `1px solid rgba(0, 240, 255, ${item.sentiment * 0.5})`,
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.chain}</div>
            <div className="mono" style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>{(item.sentiment * 100).toFixed(0)}% BULLISH</div>
          </div>
        ))}
      </div>
    </Card>
  );
};
