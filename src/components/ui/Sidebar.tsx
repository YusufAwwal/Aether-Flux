'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Activity, Wallet, Shield, Settings, Zap, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'NETWORK OVERVIEW', href: '/' },
  { icon: Activity, label: 'FLUX STREAM', href: '/flux' },
  { icon: ShieldAlert, label: 'WHALE ALERTS', href: '/alerts' },
  { icon: Wallet, label: 'PORTFOLIO HUB', href: '/portfolio' },
  { icon: Shield, label: 'GOVERNANCE', href: '/governance' },
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

      <div className={styles.footer}>
        <div className={styles.status}>
          <div className={styles.pulse} />
          <span className="mono">NETWORK: ETHEREUM</span>
        </div>
      </div>
    </aside>
  );
};
