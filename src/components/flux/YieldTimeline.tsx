'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const YieldTimeline = () => {
  const points = [
    { x: 0, y: 80 },
    { x: 50, y: 70 },
    { x: 100, y: 90 },
    { x: 150, y: 40 },
    { x: 200, y: 60 },
    { x: 250, y: 30 },
    { x: 300, y: 50 },
  ];

  const path = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`;

  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '150px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>APR_HISTORICAL_TIMELINE</h4>
        <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>LIDO_ETH</div>
      </div>

      <svg viewBox="0 0 300 100" style={{ width: '100%', height: '80px', overflow: 'visible' }}>
        <motion.path
          d={path}
          stroke="var(--accent-cyan)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="var(--accent-cyan)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
};
