'use client';

import React, { useState, useEffect } from 'react';

export const GasTicker = () => {
  const [gas, setGas] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setGas(prev => Math.max(10, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>SLOW</span>
        <span className="mono" style={{ fontSize: '0.875rem' }}>{gas - 2} G</span>
      </div>
      <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>NORMAL</span>
        <span className="mono" style={{ fontSize: '0.875rem', fontWeight: 600 }}>{gas} G</span>
      </div>
      <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.625rem', color: 'var(--accent-purple)' }}>FAST</span>
        <span className="mono" style={{ fontSize: '0.875rem' }}>{gas + 5} G</span>
      </div>
    </div>
  );
};
