'use client';

import React from 'react';

export const PerformanceChart = () => {
  const points = [20, 45, 30, 60, 55, 80, 70, 95].map((y, i) => `${i * 40},${100 - y}`).join(' ');

  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>PORTFOLIO PERFORMANCE (7D)</h4>
      <div style={{ height: '120px', width: '100%', position: 'relative' }}>
        <svg viewBox="0 0 280 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M 0,100 ${points.split(' ').map(p => `L ${p}`).join(' ')} L 280,100 Z`}
            fill="url(#lineGradient)"
          />
          <polyline
            points={points}
            fill="none"
            stroke="var(--accent-cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.split(' ').map((p, i) => {
            const [x, y] = p.split(',');
            return <circle key={i} cx={x} cy={y} r="3" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="2" />;
          })}
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.625rem', color: 'var(--text-dim)' }}>
        <span>MON</span>
        <span>WED</span>
        <span>FRI</span>
        <span>SUN</span>
      </div>
    </div>
  );
};
