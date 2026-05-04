'use client';

import React from 'react';

export const NetWorthTicker = ({ value }: { value: string }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>TOTAL NET WORTH</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{value}</h2>
        <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: 700 }}>+12.4%</div>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map(t => (
          <button key={t} style={{ fontSize: '0.625rem', padding: '0.25rem 0.5rem', borderRadius: '4px', background: t === '1D' ? 'rgba(0, 240, 255, 0.1)' : 'transparent', border: t === '1D' ? '1px solid var(--accent-cyan)' : '1px solid transparent', color: t === '1D' ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};
