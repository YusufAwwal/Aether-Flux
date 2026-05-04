'use client';

import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export const YieldHealth = () => {
  return (
    <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(0, 240, 255, 0.02)', border: '1px solid rgba(0, 240, 255, 0.1)', borderRadius: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <ShieldCheck size={24} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>YIELD SAFETY AUDIT</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>PROTOCOL SECURITY</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981' }}>ALL_AUDITED</div>
        </div>

        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>LIQUIDITY DEPTH</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981' }}>OPTIMAL</div>
        </div>

        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>IMPERMANENT LOSS</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple)' }}>LOW_RISK</div>
        </div>
      </div>
    </div>
  );
};
