'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Calculator } from 'lucide-react';

export const YieldCalculator = () => {
  const [apr, setApr] = useState(10);
  const [compounds, setCompounds] = useState(365);

  const apy = (Math.pow(1 + (apr / 100) / compounds, compounds) - 1) * 100;

  return (
    <Card title="YIELD CALCULATOR" subtitle="APR to APY conversion engine">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ fontSize: '0.625rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>BASE APR (%)</label>
          <input 
            type="number" 
            value={apr} 
            onChange={(e) => setApr(parseFloat(e.target.value) || 0)}
            style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '4px', padding: '0.75rem', color: 'var(--text-primary)', fontSize: '1rem' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.625rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>COMPOUND FREQUENCY (PER YEAR)</label>
          <select 
            value={compounds} 
            onChange={(e) => setCompounds(parseInt(e.target.value))}
            style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '4px', padding: '0.75rem', color: 'var(--text-primary)', fontSize: '0.875rem' }}
          >
            <option value={1}>Annually</option>
            <option value={12}>Monthly</option>
            <option value={52}>Weekly</option>
            <option value={365}>Daily</option>
          </select>
        </div>

        <div style={{ padding: '1.25rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(0, 240, 255, 0.1)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.25rem' }}>ESTIMATED APY</div>
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>{apy.toFixed(2)}%</div>
        </div>
      </div>
    </Card>
  );
};
