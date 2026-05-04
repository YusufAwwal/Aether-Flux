'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export const RiskGauge = () => {
  const score = 24; // 0-100

  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start' }}>
        <Shield size={16} color="var(--accent-cyan)" />
        <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>RISK SCORE</h4>
      </div>
      
      <div style={{ position: 'relative', width: '120px', height: '60px', overflow: 'hidden' }}>
        <div style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          border: '12px solid rgba(255,255,255,0.05)',
          borderBottomColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0
        }} />
        <div style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          border: '12px solid var(--accent-cyan)',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `rotate(${score * 1.8 - 90}deg)`,
          transition: 'transform 1s ease'
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', fontSize: '1.25rem', fontWeight: 800 }}>
          {score}
        </div>
      </div>
      
      <div style={{ fontSize: '0.625rem', color: '#10b981', fontWeight: 700 }}>NEURAL_SAFE_ZONE</div>
    </div>
  );
};
