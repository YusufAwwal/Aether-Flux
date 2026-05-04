'use client';

import React from 'react';

import { Layers, TrendingUp, Users, Activity } from 'lucide-react';
import { Modal } from '../ui/Modal';
import styles from './ProtocolStats.module.css';

interface Protocol {
  name: string;
  vol: string;
  fill: number;
  tvl: string;
  users: string;
  change: number;
}

const DATA: Protocol[] = [
  { name: 'Uniswap v3', vol: '$1.2B', fill: 85, tvl: '$4.2B', users: '124K', change: 12.5 },
  { name: 'Aave v3', vol: '$850M', fill: 65, tvl: '$6.1B', users: '45K', change: -2.1 },
  { name: 'Curve Finance', vol: '$420M', fill: 45, tvl: '$2.8B', users: '12K', change: 5.4 },
  { name: 'Lido', vol: '$2.4B', fill: 95, tvl: '$18.2B', users: '210K', change: 1.8 },
];

export const ProtocolStats = () => {
  const [selected, setSelected] = React.useState<Protocol | null>(null);

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Layers size={18} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>TOP PROTOCOLS</h3>
      </div>
      
      {DATA.map((item, i) => (
        <div 
          key={i} 
          className={styles.item} 
          style={{ cursor: 'pointer' }}
          onClick={() => setSelected(item)}
        >
          <div className={styles.info}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.vol}>{item.vol}</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: `${item.fill}%` }} />
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title="Protocol Intelligence"
      >
        {selected && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selected.name}</h2>
              <div style={{ 
                color: selected.change > 0 ? '#10b981' : '#ef4444',
                fontSize: '0.875rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <TrendingUp size={16} /> {selected.change}%
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px' }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>TOTAL VALUE LOCKED</div>
                <div className="mono" style={{ fontSize: '1.125rem', fontWeight: 700 }}>{selected.tvl}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px' }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>ACTIVE USERS (24H)</div>
                <div className="mono" style={{ fontSize: '1.125rem', fontWeight: 700 }}>{selected.users}</div>
              </div>
            </div>

            <div style={{ background: 'rgba(0, 240, 255, 0.05)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-active)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Activity size={14} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>FLUX VELOCITY SCORE</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>84/100</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                High liquidity flux detected. Interaction risk: Minimal.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
