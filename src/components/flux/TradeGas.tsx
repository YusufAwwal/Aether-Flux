'use client';

import React from 'react';
import { Zap } from 'lucide-react';

export const TradeGas = () => {
  return (
    <div style={{ padding: '1rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ 
        width: '32px', 
        height: '32px', 
        borderRadius: '50%', 
        background: 'rgba(0, 240, 255, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--accent-cyan)'
      }}>
        <Zap size={16} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>EST. TRADE COST</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span className="mono" style={{ fontSize: '1rem', fontWeight: 700 }}>$4.28</span>
          <span style={{ fontSize: '0.625rem', color: '#10b981' }}>OPTIMAL</span>
        </div>
      </div>
    </div>
  );
};
