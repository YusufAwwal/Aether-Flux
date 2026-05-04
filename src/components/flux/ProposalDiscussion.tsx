'use client';

import React from 'react';
import { MessageSquare, User } from 'lucide-react';

const COMMENTS = [
  { user: 'Vitalik.eth', comment: 'The gas optimization logic seems sound, but we should verify the L2 impact.', time: '2H AGO' },
  { user: 'Satoshi_Fan', comment: 'Strongly support this integration. long overdue.', time: '5H AGO' },
  { user: 'Neural_Mind', comment: 'We need more data on the cross-chain slippage parameters.', time: '1D AGO' },
];

export const ProposalDiscussion = () => {
  return (
    <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <MessageSquare size={18} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>PROPOSAL DISCUSSION</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {COMMENTS.map((c, i) => (
          <div key={i} style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} color="var(--text-dim)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{c.user}</span>
                <span className="mono" style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{c.time}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>{c.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
