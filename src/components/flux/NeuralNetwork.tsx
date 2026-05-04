'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NeuralNetwork = () => {
  const nodes = [
    { x: 50, y: 50 },
    { x: 150, y: 20 },
    { x: 150, y: 80 },
    { x: 250, y: 50 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [1, 2]
  ];

  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '150px', position: 'relative', overflow: 'hidden' }}>
      <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>NEURAL_NODE_TOPOLOGY</h4>
      
      <svg viewBox="0 0 300 100" style={{ width: '100%', height: '80px' }}>
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--accent-cyan)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="4"
            fill={i === 0 || i === 3 ? "var(--accent-purple)" : "var(--accent-cyan)"}
            animate={{ r: [4, 6, 4] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
};
