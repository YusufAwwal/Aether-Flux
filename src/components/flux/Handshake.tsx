'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Handshake = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <h4 style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.625rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>NEURAL_HANDSHAKE_AUTH</h4>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '40px', height: '40px', border: '1px solid var(--accent-cyan)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ width: '20px', height: '2px', background: 'var(--accent-cyan)' }} />
        </motion.div>

        <div style={{ display: 'flex', gap: '4px' }}>
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              style={{ width: '4px', height: '4px', background: 'var(--accent-cyan)', borderRadius: '50%' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>

        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '40px', height: '40px', border: '1px solid var(--accent-purple)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ width: '20px', height: '2px', background: 'var(--accent-purple)' }} />
        </motion.div>
      </div>
    </div>
  );
};
