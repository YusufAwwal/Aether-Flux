'use client';

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const RefreshButton = ({ onRefresh }: { onRefresh: () => void }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefresh();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <button 
      onClick={handleRefresh}
      style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: 'var(--glass-border)', 
        borderRadius: '4px', 
        padding: '0.5rem', 
        color: 'var(--text-dim)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        animate={{ rotate: isRefreshing ? 360 : 0 }}
        transition={{ duration: 0.5, repeat: isRefreshing ? Infinity : 0, ease: 'linear' }}
      >
        <RefreshCw size={14} />
      </motion.div>
    </button>
  );
};
