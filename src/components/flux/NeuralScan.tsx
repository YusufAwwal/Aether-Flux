'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NeuralScan = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
      <motion.div
        style={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(to right, transparent, var(--accent-cyan), transparent)',
          boxShadow: '0 0 15px var(--accent-cyan)',
          opacity: 0.1
        }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};
