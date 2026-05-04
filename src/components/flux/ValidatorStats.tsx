'use client';

import React from 'react';
import { Server, Activity, Shield } from 'lucide-react';

const VALIDATORS = [
  { name: 'Lido_Validator_01', uptime: '99.99%', status: 'ACTIVE', load: '42%' },
  { name: 'Coinbase_Cloud', uptime: '99.95%', status: 'ACTIVE', load: '68%' },
  { name: 'Rocket_Node_A1', uptime: '100.00%', status: 'ACTIVE', load: '12%' },
];

export const ValidatorStats = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Server size={18} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>VALIDATOR PERFORMANCE</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {VALIDATORS.map((v, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{v.name}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>UPTIME: {v.uptime}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{v.load} LOAD</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>{v.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
