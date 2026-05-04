'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import styles from './TokenSearch.module.css';

const TAGS = ['ALL', 'TOKENS', 'NFTS', 'STABLES', 'DEFI'];

export const TokenSearch = () => {
  const [activeTag, setActiveTag] = useState('ALL');

  return (
    <div className={styles.container}>
      <Search size={18} color="var(--text-dim)" />
      <input className={styles.input} placeholder="FILTER ASSETS, COLLECTIONS, OR PROTOCOLS..." />
      <div className={styles.tags}>
        {TAGS.map((tag) => (
          <div
            key={tag}
            className={`${styles.tag} ${activeTag === tag ? styles.tagActive : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
      <button style={{ background: 'none', border: 'none', color: 'var(--text-dim)', marginLeft: '0.5rem' }}>
        <SlidersHorizontal size={18} />
      </button>
    </div>
  );
};
