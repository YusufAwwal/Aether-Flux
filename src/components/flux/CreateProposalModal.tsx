'use client';

import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { FileText, Plus } from 'lucide-react';

interface CreateProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProposalModal: React.FC<CreateProposalModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="INITIALIZE NEW PROPOSAL">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', border: '1px solid var(--accent-cyan)', cursor: 'pointer' }}>
            <FileText size={20} color="var(--accent-cyan)" style={{ marginBottom: '0.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>PROTOCOL_UPGRADE</div>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>Core logic updates</div>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
            <Plus size={20} color="var(--text-dim)" style={{ marginBottom: '0.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>ASSET_LISTING</div>
            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>New token parameters</div>
          </div>
        </div>

        <div>
          <label style={{ fontSize: '0.625rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>PROPOSAL TITLE</label>
          <input 
            placeholder="e.g. Implement Multi-Sig Vaults..." 
            style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '4px', padding: '0.75rem', color: 'var(--text-primary)', fontSize: '0.875rem' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.625rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>IPFS DESCRIPTION HASH</label>
          <input 
            placeholder="Qm..." 
            style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '4px', padding: '0.75rem', color: 'var(--text-primary)', fontSize: '0.875rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="primary" fullWidth>SUBMIT TO ON-CHAIN</Button>
          <Button variant="outline" fullWidth onClick={onClose}>SAVE DRAFT</Button>
        </div>
      </div>
    </Modal>
  );
};
