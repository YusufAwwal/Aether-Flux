'use client';

import React from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';

const POSITIONS = [
  { protocol: 'Lido', asset: 'stETH', value: '$8,420', apy: '4.2%', risk: 'LOW' },
  { protocol: 'Aave v3', asset: 'USDC', value: '$1,200', apy: '2.1%', risk: 'LOW' },
  { protocol: 'Uniswap v3', asset: 'ETH/USDC', value: '$2,400', apy: '18.5%', risk: 'MEDIUM' },
];

export const YieldBreakdown = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>YIELD STREAMS</h4>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {POSITIONS.map((pos, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                background: 'rgba(255,255,255,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Zap size={16} color={pos.risk === 'LOW' ? '#10b981' : 'var(--accent-purple)'} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{pos.protocol}</div>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{pos.asset}</div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700 }}>{pos.value}</div>
              <div style={{ fontSize: '0.625rem', color: '#10b981', fontWeight: 600 }}>{pos.apy} APY</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
