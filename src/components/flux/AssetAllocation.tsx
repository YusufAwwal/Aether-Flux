'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ASSETS = [
  { name: 'ETH', value: 65, color: 'var(--accent-cyan)' },
  { name: 'STABLES', value: 25, color: 'var(--accent-purple)' },
  { name: 'ALTCOINS', value: 10, color: 'rgba(255,255,255,0.2)' },
];

export const AssetAllocation = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>ASSET ALLOCATION</h4>
      <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', display: 'flex', marginBottom: '1.5rem' }}>
        {ASSETS.map((asset, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: `${asset.value}%` }}
            transition={{ duration: 1, delay: i * 0.2 }}
            style={{ height: '100%', background: asset.color }}
          />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {ASSETS.map((asset, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: asset.color }} />
              <span style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{asset.name}</span>
            </div>
            <div className="mono" style={{ fontSize: '0.875rem', fontWeight: 700 }}>{asset.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};
