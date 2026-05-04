'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const RiskGauge = () => {
  const risk = 34; // 0-100

  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h4 style={{ alignSelf: 'flex-start', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>SYSTEM_RISK_LEVEL</h4>
      
      <div style={{ position: 'relative', width: '150px', height: '75px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '50%', border: '12px solid rgba(255,255,255,0.05)', boxSizing: 'border-box' }} />
        <motion.div 
          style={{ 
            position: 'absolute', 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            border: '12px solid var(--accent-cyan)', 
            borderBottomColor: 'transparent', 
            borderRightColor: 'transparent',
            boxSizing: 'border-box',
            originX: '50%',
            originY: '50%'
          }} 
          animate={{ rotate: [-135, -135 + (risk * 1.8), -135 + (risk * 1.8)] }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center', fontWeight: 800, fontSize: '1.5rem' }}>{risk}%</div>
      </div>
      
      <div style={{ marginTop: '0.75rem', fontSize: '0.625rem', color: '#10b981', fontWeight: 700 }}>STABLE_MARKET_CONDITIONS</div>
    </div>
  );
};
