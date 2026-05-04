'use client';

import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const PortfolioHealth = () => {
  return (
    <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(0, 240, 255, 0.02)', border: '1px solid rgba(0, 240, 255, 0.1)', borderRadius: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <ShieldCheck size={24} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>PORTFOLIO HEALTH ANALYSIS</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <CheckCircle2 size={18} color="#10b981" />
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>DIVERSIFICATION</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Asset spread optimal across 5 sectors.</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <CheckCircle2 size={18} color="#10b981" />
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>SECURITY</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>0 contracts with high-risk permissions found.</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <AlertTriangle size={18} color="var(--accent-purple)" />
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>LIQUIDITY</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>2 assets have slippage warnings (&gt;2%).</div>
          </div>
        </div>
      </div>
    </div>
  );
};
