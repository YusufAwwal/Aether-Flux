'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NeuralPulse = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '100px', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            flex: 1,
            background: 'var(--accent-cyan)',
            borderRadius: '1px',
            height: '20%'
          }}
          animate={{
            height: [
              `${20 + Math.random() * 60}%`,
              `${20 + Math.random() * 60}%`,
              `${20 + Math.random() * 60}%`
            ],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};
