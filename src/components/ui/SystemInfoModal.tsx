'use client';

import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Info, Cpu, HardDrive, ShieldCheck } from 'lucide-react';

interface SystemInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemInfoModal: React.FC<SystemInfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="SYSTEM_DIAGNOSTICS_REPORT">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '8px' }}>
            <Cpu size={20} color="var(--accent-cyan)" style={{ marginBottom: '0.75rem' }} />
            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>CORE_VERSION</div>
            <div style={{ fontWeight: 800 }}>AETHER_FLUX v4.2.1</div>
          </div>
          <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: 'var(--glass-border)', borderRadius: '8px' }}>
            <HardDrive size={20} color="var(--accent-purple)" style={{ marginBottom: '0.75rem' }} />
            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>STORAGE_STATUS</div>
            <div style={{ fontWeight: 800 }}>LOCAL_SYNCED</div>
          </div>
        </div>

        <div style={{ padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={18} color="var(--accent-cyan)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>SECURITY_ENCLAVE_ACTIVE</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
            All neural communications are encrypted via 256-bit AES protocol. RPC endpoints are verified using zero-knowledge signature validation.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>BUILD_HASH</span>
            <span className="mono">0x7f2c...e4a1</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'right' }}>
            <span style={{ color: 'var(--text-dim)' }}>LAST_SYNC</span>
            <span className="mono">2026-05-04_23:22</span>
          </div>
        </div>

        <Button variant="primary" fullWidth onClick={onClose}>ACKNOWLEDGE</Button>
      </div>
    </Modal>
  );
};
