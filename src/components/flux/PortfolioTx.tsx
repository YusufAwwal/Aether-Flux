'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownLeft, ExternalLink } from 'lucide-react';

const TXS = [
  { hash: '0x4a2...f89', type: 'RECEIVED', asset: 'USDC', amount: '+500.00', time: '2h ago', status: 'SUCCESS' },
  { hash: '0x71c...4f2', type: 'SENT', asset: 'ETH', amount: '-0.25', time: '5h ago', status: 'SUCCESS' },
  { hash: '0x9d2...a11', type: 'SWAP', asset: 'ETH → LINK', amount: '0.1 ETH', time: '1d ago', status: 'SUCCESS' },
];

export const PortfolioTx = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>RECENT ACTIVITY</h4>
        <button style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)', background: 'none', border: 'none' }}>VIEW ALL</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {TXS.map((tx, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '4px', 
              background: tx.type === 'RECEIVED' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: tx.type === 'RECEIVED' ? '#10b981' : 'var(--text-dim)'
            }}>
              {tx.type === 'RECEIVED' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{tx.type} {tx.asset}</span>
                <span style={{ fontSize: '0.625rem', padding: '1px 4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '2px' }}>{tx.status}</span>
              </div>
              <div className="mono" style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>{tx.hash}</div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: tx.amount.startsWith('+') ? '#10b981' : 'var(--text-primary)' }}>
                {tx.amount}
              </div>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{tx.time}</div>
            </div>

            <button style={{ color: 'var(--text-dim)', padding: '0.25rem' }}>
              <ExternalLink size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
