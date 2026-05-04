'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './StatWidget.module.css';

interface AnimatedStatProps {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({ label, value, change, icon }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.change} style={{ color: change >= 0 ? '#10b981' : '#ef4444' }}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.value}>{value}</div>
        <div className={styles.label}>{label.toUpperCase()}</div>
      </div>
      <div className={styles.glow} />
    </motion.div>
  );
};
