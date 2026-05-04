'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import styles from './NodeMap.module.css';

const NODES = Array.from({ length: 15 }, () => ({
  x: Math.random() * 280 + 10,
  y: Math.random() * 180 + 10,
  size: Math.random() * 2 + 1,
}));

export const NodeMap = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
        <Globe size={18} color="var(--accent-cyan)" />
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>GLOBAL NODE DISTRIBUTION</h3>
      </div>

      <svg viewBox="0 0 300 200" className={styles.mapSvg}>
        {/* Simple World Map Path Approximation */}
        <path d="M 50 100 Q 150 50 250 100 Q 150 150 50 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        
        {/* Render Nodes */}
        {NODES.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.size}
            className={styles.node}
            animate={{
              opacity: [0.4, 1, 0.4],
              r: [node.size, node.size * 1.5, node.size]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Random Connections */}
        {NODES.slice(0, 5).map((node, i) => {
          const next = NODES[i + 1];
          return (
            <line 
              key={i}
              x1={node.x} y1={node.y}
              x2={next.x} y2={next.y}
              className={styles.connection}
            />
          );
        })}
      </svg>
      
      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '0.625rem', color: 'var(--text-dim)', zIndex: 10 }}>
        ACTIVE NODES: 12,842 | SYNC RATE: 99.9%
      </div>
    </div>
  );
};
