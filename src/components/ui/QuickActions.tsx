'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Send, RefreshCw, Search } from 'lucide-react';

export const QuickActions = () => {
  const ACTIONS = [
    { icon: <Plus size={18} />, label: 'NEW_TX' },
    { icon: <Send size={18} />, label: 'SEND' },
    { icon: <RefreshCw size={18} />, label: 'SWAP' },
    { icon: <Search size={18} />, label: 'FIND' },
  ];

  return (
    <div style={{ position: 'fixed', bottom: '4rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 60 }}>
      {ACTIONS.map((action, i) => (
        <motion.button
          key={i}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            border: 'var(--glass-border)',
            color: 'var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
          title={action.label}
        >
          {action.icon}
        </motion.button>
      ))}
    </div>
  );
};
