'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AlertPulse = () => {
  return (
    <div style={{ position: 'relative', width: '12px', height: '12px' }}>
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--accent-purple)',
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 2.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: 'var(--accent-purple)',
          borderRadius: '50%',
          boxShadow: '0 0 10px var(--accent-purple)',
        }}
      />
    </div>
  );
};
