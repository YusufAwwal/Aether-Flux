'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LiquidityFlow.module.css';

const NODES = [
  { id: 'dex', label: 'DEX POOLS', x: 50, y: 50 },
  { id: 'lend', label: 'LENDING', x: 250, y: 50 },
  { id: 'yield', label: 'YIELD AGG', x: 150, y: 150 },
];

const PATHS = [
  { from: 'dex', to: 'lend' },
  { from: 'lend', to: 'yield' },
  { from: 'yield', to: 'dex' },
];

export const LiquidityFlow = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>LIQUIDITY FLOW MAPPING</h4>
      </div>
      
      <svg viewBox="0 0 300 200" className={styles.svg}>
        {/* Render Paths */}
        {PATHS.map((path, i) => {
          const from = NODES.find(n => n.id === path.from)!;
          const to = NODES.find(n => n.id === path.to)!;
          return (
            <React.Fragment key={i}>
              <path 
                d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`} 
                className={styles.path} 
              />
              <motion.circle
                r="2"
                className={styles.particle}
                animate={{
                  offsetDistance: ['0%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 1
                }}
                style={{
                  offsetPath: `path('M ${from.x} ${from.y} L ${to.x} ${to.y}')`
                }}
              />
            </React.Fragment>
          );
        })}

        {/* Render Nodes */}
        {NODES.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="4" fill="var(--accent-cyan)" />
            <text x={node.x} y={node.y - 10} textAnchor="middle" className={styles.label}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
