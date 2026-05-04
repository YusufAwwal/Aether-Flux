'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const YieldRadar = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <h4 style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>OPPORTUNITY_SCANNER</h4>
      
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid var(--accent-cyan)',
              borderRadius: '50%',
              opacity: 0
            }}
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 1,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '2px',
            height: '60px',
            background: 'linear-gradient(to top, var(--accent-cyan), transparent)',
            originY: 0,
            x: '-50%',
            y: '-100%'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <div style={{ position: 'absolute', inset: '45%', background: 'var(--accent-cyan)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-cyan)' }} />
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.625rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>SCANNING_NEURAL_NETWORK...</div>
    </div>
  );
};
