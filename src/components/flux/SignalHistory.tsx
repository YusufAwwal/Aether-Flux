'use client';

import React from 'react';
import { Card } from '../ui/Card';

const HISTORY = [
  { signal: 'ETH_ACCUMULATION', date: '2026-05-01', result: '+12.4%', accuracy: 'VERIFIED' },
  { signal: 'SOL_LIQUIDITY_GAP', date: '2026-04-28', result: '-2.1%', accuracy: 'FALSE_POSITIVE' },
  { signal: 'STABLE_VELOCITY', date: '2026-04-25', result: '+8.7%', accuracy: 'VERIFIED' },
  { signal: 'BTC_ORDER_FLOW', date: '2026-04-22', result: '+15.2%', accuracy: 'VERIFIED' },
];

export const SignalHistory = () => {
  return (
    <Card title="SIGNAL PERFORMANCE HISTORY" subtitle="Audit of past neural predictions">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
        {HISTORY.map((h, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{h.signal}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>DATE: {h.date}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: h.result.startsWith('+') ? '#10b981' : 'var(--accent-purple)' }}>{h.result}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{h.accuracy}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
