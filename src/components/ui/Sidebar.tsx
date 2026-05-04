'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Activity, Wallet, Shield, Settings, Zap, ShieldAlert, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'NETWORK OVERVIEW', href: '/' },
  { icon: Activity, label: 'FLUX STREAM', href: '/flux' },
  { icon: ShieldAlert, label: 'WHALE ALERTS', href: '/alerts' },
  { icon: Wallet, label: 'PORTFOLIO HUB', href: '/portfolio' },
  { icon: Zap, label: 'YIELD OPTIMIZER', href: '/yield' },
  { icon: Shield, label: 'GOVERNANCE', href: '/governance' },
  { icon: Brain, label: 'NEURAL SIGNALS', href: '/signals' },
  { icon: Settings, label: 'SYSTEM SETTINGS', href: '/settings' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Zap className={styles.logoIcon} size={24} color="var(--accent-cyan)" fill="var(--accent-cyan)" />
        <span className={styles.logoText}>AETHER</span>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(styles.navItem, isActive && styles.active)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: 'var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ position: 'relative', width: '8px', height: '8px' }}>
          <motion.div 
            style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#10b981' }}
            animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#10b981' }} />
        </div>
        <div style={{ fontSize: '0.625rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--text-dim)' }}>SYSTEM_HEALTH: NOMINAL</div>
      </div>
    </aside>
  );
};
