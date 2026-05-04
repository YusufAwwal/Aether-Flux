'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Brain, ExternalLink, ShieldCheck } from 'lucide-react';

interface InsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  insight: any;
}

export const InsightModal: React.FC<InsightModalProps> = ({ isOpen, onClose, insight }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="NEURAL_INSIGHT_ANALYSIS">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ padding: '1.25rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Brain size={20} color="var(--accent-cyan)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>MODEL_CONFIDENCE_SCORE: 94.2</span>
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{insight?.title}</div>
        </div>

        <div style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
          {insight?.detail} Our neural network has identified a high-probability correlation between recent stablecoin mints and L2 accumulation patterns. This signal suggests a potential 12% upside in the next 72 hours based on historical liquidity flow models.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: 'var(--glass-border)' }}>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>DATA_SOURCE</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Etherscan_API</div>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: 'var(--glass-border)' }}>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>VALIDATION</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10b981' }}>VERIFIED_ON_CHAIN</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="primary" fullWidth>EXECUTE STRATEGY</Button>
          <Button variant="outline" fullWidth onClick={onClose}>CLOSE ANALYSIS</Button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: 'var(--text-dim)', cursor: 'pointer' }}>
          <ShieldCheck size={14} />
          <span style={{ fontSize: '0.625rem', fontWeight: 700 }}>VIEW NEURAL PROOF</span>
          <ExternalLink size={14} />
        </div>
      </div>
    </Modal>
  );
};
