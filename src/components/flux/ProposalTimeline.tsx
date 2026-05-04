'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ProposalTimeline = () => {
  const STAGES = [
    { label: 'DRAFT', status: 'COMPLETED' },
    { label: 'VOTING', status: 'ACTIVE' },
    { label: 'QUEUED', status: 'PENDING' },
    { label: 'EXECUTED', status: 'PENDING' },
  ];

  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>PROPOSAL_LIFECYCLE</h4>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '12px', left: '10px', right: '10px', height: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
        
        {STAGES.map((stage, i) => (
          <div key={i} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <motion.div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: stage.status === 'COMPLETED' ? 'var(--accent-cyan)' : stage.status === 'ACTIVE' ? 'var(--accent-purple)' : 'var(--bg-card)',
                border: stage.status === 'PENDING' ? '2px solid rgba(255,255,255,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              animate={stage.status === 'ACTIVE' ? { scale: [1, 1.2, 1], boxShadow: ['0 0 0px var(--accent-purple)', '0 0 10px var(--accent-purple)'] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {stage.status === 'COMPLETED' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }} />}
            </motion.div>
            <div style={{ fontSize: '0.625rem', fontWeight: 700, color: stage.status === 'PENDING' ? 'var(--text-dim)' : 'var(--text-primary)' }}>{stage.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
