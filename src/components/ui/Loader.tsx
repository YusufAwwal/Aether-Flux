'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import styles from './Loader.module.css';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing Aether Flux...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const statusTimer = setInterval(() => {
      const statuses = [
        'Connecting to Ethereum node...',
        'Decrypting secure handshake...',
        'Synchronizing state variables...',
        'Allocating memory buffers...',
        'Ready.'
      ];
      setStatus(statuses[Math.floor((progress / 100) * statuses.length)] || 'Ready.');
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, [progress, onComplete]);

  return (
    <div className={styles.loaderWrapper}>
      <motion.div 
        className={styles.logoContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Zap size={64} color="var(--accent-cyan)" fill="var(--accent-cyan)" />
        <motion.div 
          className={styles.scanLine}
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <div className={styles.textContainer}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AETHER
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Intelligence Engine
        </motion.p>
      </div>

      <div className={styles.progressContainer}>
        <motion.div 
          className={styles.progressBar} 
          animate={{ width: `${progress}%` }}
        />
      </div>

      <motion.div 
        className={styles.statusText}
        key={status}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {status}
      </motion.div>
    </div>
  );
};
