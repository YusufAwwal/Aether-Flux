'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Activity, Wallet, Settings } from 'lucide-react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10vh', paddingLeft: '2rem', paddingRight: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '600px', 
              background: 'var(--bg-card)', 
              border: 'var(--glass-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 0 50px rgba(0,240,255,0.2)'
            }}
          >
            <div style={{ padding: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Search size={20} color="var(--accent-cyan)" />
              <input 
                autoFocus
                placeholder="Type a command or search..."
                style={{ background: 'none', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '1.125rem', width: '100%' }}
              />
              <div style={{ padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.625rem', color: 'var(--text-dim)' }}>ESC</div>
            </div>
            
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>SUGGESTED COMMANDS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {[
                  { icon: Activity, label: 'Go to Flux Stream', shortcut: 'G F' },
                  { icon: Wallet, label: 'View Portfolio', shortcut: 'G P' },
                  { icon: Command, label: 'Scan Network', shortcut: 'S N' },
                  { icon: Settings, label: 'Open Settings', shortcut: 'G S' },
                ].map((item, i) => (
                  <button key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    padding: '0.75rem', 
                    width: '100%', 
                    borderRadius: '8px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)'
                  }}>
                    <item.icon size={18} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    <span style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{item.shortcut}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
