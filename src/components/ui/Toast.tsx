'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const colors = {
    success: '#10b981',
    info: 'var(--accent-cyan)',
    error: '#ef4444'
  };

  const icons = {
    success: <CheckCircle2 size={18} />,
    info: <Info size={18} />,
    error: <AlertCircle size={18} />
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            background: 'var(--bg-card)',
            border: `1px solid ${colors[type]}44`,
            borderRadius: '8px',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${colors[type]}22`,
            zIndex: 2000,
            minWidth: '300px'
          }}
        >
          <div style={{ color: colors[type] }}>{icons[type]}</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{message}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
