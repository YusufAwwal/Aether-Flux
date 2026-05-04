'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Trophy, Star } from 'lucide-react';

export const GovernanceScore = () => {
  return (
    <Card title="GOVERNANCE REPUTATION" subtitle="Neural participation score">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, border: '4px solid rgba(0, 240, 255, 0.1)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '4px solid var(--accent-cyan)', borderBottomColor: 'transparent', borderRadius: '50%', transform: 'rotate(45deg)' }} />
          <Trophy size={32} color="var(--accent-cyan)" />
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>842</div>
          <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>REPUTATION POINTS</div>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>PARTICIPATION RATE</span>
            <span className="mono" style={{ color: '#10b981' }}>92%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>STREAK</span>
            <span className="mono" style={{ color: 'var(--accent-purple)' }}>12_PROPOSALS</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} size={14} fill={i <= 4 ? "var(--accent-cyan)" : "transparent"} color="var(--accent-cyan)" />
          ))}
        </div>
      </div>
    </Card>
  );
};
