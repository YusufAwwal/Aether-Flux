'use client';

import React, { useState } from 'react';
import { Terminal, ChevronUp, ChevronDown, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LogTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState([
    { time: '22:45:12', msg: 'Neural handshake established.' },
    { time: '22:45:15', msg: 'Syncing RPC nodes... SUCCESS' },
    { time: '22:45:20', msg: 'Fetching yield strategies for LIDO_ETH...' },
    { time: '22:45:22', msg: 'Found 12 active proposals. Mapping topology.' },
  ]);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', left: '260px', right: '4rem', zIndex: 45 }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: '0.25rem 1rem', background: 'var(--bg-card)', border: 'var(--glass-border)', borderBottom: 'none', borderRadius: '4px 4px 0 0', color: 'var(--accent-cyan)', fontSize: '0.625rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
      >
        <Terminal size={12} />
        PROTOCOL_LOGS
        {isOpen ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '150px' }}
            exit={{ height: 0 }}
            style={{ background: 'rgba(5, 5, 5, 0.95)', backdropFilter: 'blur(10px)', border: 'var(--glass-border)', padding: '1rem', overflowY: 'auto', borderTop: 'none' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {logs.map((log, i) => (
                <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--text-dim)' }}>[{log.time}]</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>{log.msg}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
