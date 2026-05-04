'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';

export const NotificationToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg-card)',
            border: 'var(--glass-border)',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 100,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Info size={16} color="var(--accent-cyan)" />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 800 }}>SYSTEM_SYNC_COMPLETE</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>All neural nodes are operational.</div>
          </div>
          <button onClick={() => setShow(false)} style={{ marginLeft: '1rem', color: 'var(--text-dim)' }}>
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
