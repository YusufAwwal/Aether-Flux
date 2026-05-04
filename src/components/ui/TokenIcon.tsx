'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TokenIconProps {
  symbol: string;
  color?: string;
  size?: number;
}

export const TokenIcon: React.FC<TokenIconProps> = ({ symbol, color = 'var(--accent-cyan)', size = 32 }) => {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <motion.div
        style={{
          position: 'absolute',
          inset: -2,
          background: color,
          borderRadius: '50%',
          filter: 'blur(4px)',
          opacity: 0.3,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'var(--bg-card)',
        border: `1px solid ${color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.3,
        fontWeight: 800,
        color: color,
        boxShadow: `0 0 10px ${color}44`,
      }}>
        {symbol[0]}
      </div>
    </div>
  );
};
