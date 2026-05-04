'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const YieldFlow = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '200px', position: 'relative', overflow: 'hidden' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>YIELD_GENERATION_FLUX</h4>
      
      <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%' }}>
        {/* Source Nodes */}
        <g transform="translate(20, 50)">
          <circle r="4" fill="var(--accent-cyan)" />
          <text y="-10" textAnchor="middle" style={{ fontSize: '0.5rem', fill: 'var(--text-dim)' }}>DEPOSIT</text>
        </g>
        
        {/* Hub Node */}
        <g transform="translate(150, 50)">
          <circle r="8" fill="var(--accent-purple)" />
          <text y="-15" textAnchor="middle" style={{ fontSize: '0.5rem', fill: 'var(--text-dim)' }}>VAULT</text>
        </g>
        
        {/* Target Nodes */}
        <g transform="translate(280, 20)">
          <circle r="4" fill="var(--accent-cyan)" />
          <text x="5" y="4" style={{ fontSize: '0.5rem', fill: 'var(--text-dim)' }}>STAKING</text>
        </g>
        <g transform="translate(280, 80)">
          <circle r="4" fill="var(--accent-cyan)" />
          <text x="5" y="4" style={{ fontSize: '0.5rem', fill: 'var(--text-dim)' }}>LP_FARM</text>
        </g>

        {/* Paths */}
        <motion.path 
          d="M 20 50 L 150 50" 
          stroke="var(--accent-cyan)" 
          strokeWidth="1" 
          fill="none" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path 
          d="M 150 50 L 280 20" 
          stroke="var(--accent-purple)" 
          strokeWidth="1" 
          fill="none" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
        <motion.path 
          d="M 150 50 L 280 80" 
          stroke="var(--accent-purple)" 
          strokeWidth="1" 
          fill="none" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};
