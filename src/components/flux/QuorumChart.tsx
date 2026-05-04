'use client';

import React from 'react';

export const QuorumChart = ({ forVotes, againstVotes }: { forVotes: number, againstVotes: number }) => {
  const total = forVotes + againstVotes;
  const forPercent = (forVotes / total) * 100;
  const againstPercent = (againstVotes / total) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
      <div style={{ display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${forPercent}%`, background: 'var(--accent-cyan)' }} />
        <div style={{ width: `${againstPercent}%`, background: 'var(--accent-purple)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem', fontWeight: 700 }}>
        <span style={{ color: 'var(--accent-cyan)' }}>FOR: {forPercent.toFixed(1)}%</span>
        <span style={{ color: 'var(--accent-purple)' }}>AGAINST: {againstPercent.toFixed(1)}%</span>
      </div>
    </div>
  );
};
