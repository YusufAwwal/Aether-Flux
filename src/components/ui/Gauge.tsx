'use client';

import React from 'react';
import styles from './Gauge.module.css';

interface GaugeProps {
  value: number;
  max: number;
  label: string;
  unit?: string;
  size?: number;
}

export const Gauge: React.FC<GaugeProps> = ({ value, max, label, unit = '', size = 120 }) => {
  const radius = size * 0.4;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className={styles.container} style={{ width: size, height: size, position: 'relative' }}>
      <svg
        height={size}
        width={size}
        className={styles.svg}
      >
        <circle
          className={styles.background}
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={styles.progress}
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className={styles.valueContainer}>
        <span className={styles.value}>{value}{unit}</span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
};
