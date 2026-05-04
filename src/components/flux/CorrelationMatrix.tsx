'use client';

import React from 'react';
import { Card } from '../ui/Card';

const ASSETS = ['BTC', 'ETH', 'SOL', 'LINK', 'ARB'];
const MATRIX = [
  [1.00, 0.85, 0.65, 0.72, 0.58],
  [0.85, 1.00, 0.70, 0.75, 0.88],
  [0.65, 0.70, 1.00, 0.55, 0.42],
  [0.72, 0.75, 0.55, 1.00, 0.65],
  [0.58, 0.88, 0.42, 0.65, 1.00],
];

export const CorrelationMatrix = () => {
  return (
    <Card title="ASSET CORRELATION MATRIX" subtitle="Neural interdependence analysis">
      <div style={{ display: 'grid', gridTemplateColumns: `40px repeat(${ASSETS.length}, 1fr)`, gap: '4px' }}>
        <div />
        {ASSETS.map(a => (
          <div key={a} style={{ fontSize: '0.625rem', fontWeight: 800, textAlign: 'center', color: 'var(--text-dim)' }}>{a}</div>
        ))}
        
        {ASSETS.map((a, i) => (
          <React.Fragment key={a}>
            <div style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--text-dim)', display: 'flex', alignItems: 'center' }}>{a}</div>
            {MATRIX[i].map((val, j) => (
              <div 
                key={j} 
                style={{ 
                  height: '30px', 
                  background: `rgba(0, 240, 255, ${val * 0.3})`, 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '0.625rem', 
                  color: val > 0.8 ? 'white' : 'var(--text-dim)',
                  fontWeight: val > 0.8 ? 800 : 400
                }}
              >
                {val.toFixed(2)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};
