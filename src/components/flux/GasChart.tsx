'use client';

import React, { useState, useEffect } from 'react';
import styles from './GasChart.module.css';

export const GasChart = () => {
  const [data, setData] = useState<number[]>(Array.from({ length: 20 }, () => Math.random() * 50 + 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev.slice(1), Math.random() * 50 + 10]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {data.map((val, i) => (
        <div 
          key={i} 
          className={styles.bar} 
          style={{ height: `${val}%` }} 
        />
      ))}
    </div>
  );
};
