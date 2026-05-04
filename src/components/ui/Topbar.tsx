'use client';

import React from 'react';

import { Search, Bell, Command, Fuel, Info } from 'lucide-react';
import { GasTicker } from '../flux/GasTicker';
import { SystemInfoModal } from './SystemInfoModal';
import { useState } from 'react';
import styles from './Topbar.module.css';

export const Topbar = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <div className={styles.search}>
        <Search className={styles.searchIcon} size={16} />
        <input 
          type="text" 
          className={styles.searchInput} 
          placeholder="Search transactions, blocks, or addresses..." 
        />
        <div style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-dim)', fontSize: '0.625rem' }}>
          <Command size={10} />
          <span>K</span>
        </div>
      </div>

      <div className={styles.actions}>
        <GasTicker />
        <div style={{ width: '1px', height: '24px', background: 'var(--border-subtle)' }} />
        <button 
          onClick={() => setIsInfoOpen(true)}
          style={{ color: 'var(--text-secondary)', padding: '0.5rem' }}
        >
          <Info size={18} />
        </button>
        <button style={{ color: 'var(--text-secondary)', padding: '0.5rem' }}>
          <Bell size={18} />
        </button>
        <div style={{ width: '1px', height: '24px', background: 'var(--border-subtle)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Aether User</div>
            <div style={{ fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>Tier: Alpha</div>
          </div>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-purple))' }} />
        </div>
      </div>

      <SystemInfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </header>
  );
};
