'use client';

import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Shield, ChevronRight } from 'lucide-react';

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: any;
}

export const VoteModal: React.FC<VoteModalProps> = ({ isOpen, onClose, proposal }) => {
  const [direction, setDirection] = useState<'FOR' | 'AGAINST' | 'ABSTAIN' | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="SUBMIT GOVERNANCE VOTE">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.25rem' }}>{proposal?.id}</div>
          <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{proposal?.title}</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {['FOR', 'AGAINST', 'ABSTAIN'].map((opt) => (
            <button
              key={opt}
              onClick={() => setDirection(opt as any)}
              style={{
                padding: '1rem 0.5rem',
                background: direction === opt ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                border: direction === opt ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: direction === opt ? 'var(--accent-cyan)' : 'var(--text-dim)',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: 'var(--glass-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>VOTING POWER</span>
            <span className="mono" style={{ fontWeight: 700 }}>1,240 VP</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>EST. GAS COST</span>
            <span className="mono" style={{ fontWeight: 700 }}>$1.42</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="primary" fullWidth disabled={!direction}>CAST VOTE</Button>
          <Button variant="outline" fullWidth onClick={onClose}>CANCEL</Button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: 'var(--text-dim)', cursor: 'pointer' }}>
          <Shield size={14} />
          <span style={{ fontSize: '0.625rem', fontWeight: 700 }}>DELEGATE VOTING POWER</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </Modal>
  );
};
