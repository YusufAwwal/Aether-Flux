'use client';

import React from 'react';
import { Shield, UserPlus, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const DelegatePower = () => {
  return (
    <Card title="POWER DELEGATION" subtitle="Assign your voting weight">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.1)' }}>
          <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.5rem' }}>CURRENT DELEGATE</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 800 }}>S</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>SELF_DELEGATED</div>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.625rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>DELEGATE ADDRESS</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              placeholder="0x... or ENS" 
              style={{ flex: 1, background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '4px', padding: '0.75rem', color: 'var(--text-primary)', fontSize: '0.875rem' }}
            />
            <Button variant="outline" size="sm">
              <UserPlus size={16} />
            </Button>
          </div>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
          Delegating power allows another entity to vote on your behalf without transferring your tokens.
        </p>

        <Button variant="primary" fullWidth>INITIALIZE DELEGATION</Button>
      </div>
    </Card>
  );
};
