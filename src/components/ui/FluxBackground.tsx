'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FluxBackground.module.css';

const PARTICLES = Array.from({ length: 20 });

export const FluxBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid} />
      
      {PARTICLES.map((_, i) => (
        <motion.div
          key={i}
          className={styles.particle}
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        />
      ))}

      <motion.div 
        className={styles.glow}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '20%', left: '30%' }}
      />

      <div className={styles.vignette} />
    </div>
  );
};
