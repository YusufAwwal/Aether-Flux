'use client';

import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import styles from './NFTGallery.module.css';

const NFTS = [
  { id: 1, name: 'Bored Ape #4282', collection: 'BAYC' },
  { id: 2, name: 'CryptoPunk #7212', collection: 'Punks' },
  { id: 3, name: 'Azuki #142', collection: 'Azuki' },
  { id: 4, name: 'Doodles #821', collection: 'Doodles' },
];

export const NFTGallery = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ImageIcon size={18} color="var(--accent-purple)" />
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>COLLECTIBLES</h3>
        </div>
        <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>4_ITEMS</span>
      </div>

      <div className={styles.grid}>
        {NFTS.map((nft) => (
          <div key={nft.id} className={styles.item}>
            <div className={styles.imagePlaceholder}>
              {nft.collection}
            </div>
            <div className={styles.overlay}>
              <div className={styles.name}>{nft.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
