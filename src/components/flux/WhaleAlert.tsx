'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { AlertPulse } from './AlertPulse';
import styles from './WhaleAlert.module.css';

const ALERTS = [
  '1,200 ETH ($3.4M) moved from unknown wallet to Coinbase',
  '50,000,000 USDT ($50M) minted at Tether Treasury',
  '250 BTC ($15M) moved from Binance to cold storage',
  '10,000 SOL ($1.2M) liquidated on Solend',
];

export const WhaleAlert = () => {
  const [currentAlert, setCurrentAlert] = useState(ALERTS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlert(ALERTS[Math.floor(Math.random() * ALERTS.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentAlert}
        className={styles.container}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
      >
        <div className={styles.pulse} />
        <div className={styles.icon}>
          <div style={{ position: 'absolute', top: '-4px', right: '-4px' }}>
            <AlertPulse />
          </div>
          <ShieldAlert size={24} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>WHALE ALERT DETECTED</div>
          <div className={styles.text}>{currentAlert}</div>
        </div>
        <div className={styles.time}>JUST NOW</div>
      </motion.div>
    </AnimatePresence>
  );
};
