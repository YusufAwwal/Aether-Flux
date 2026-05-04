'use client';

import React, { useState, useEffect } from 'react';
import { Gauge } from '../ui/Gauge';
import { Card } from '../ui/Card';

export const MetricsGrid = () => {
  const [metrics, setMetrics] = useState({
    gas: 24,
    tps: 1420,
    load: 68,
    uptime: 99.9,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        gas: Math.floor(20 + Math.random() * 10),
        tps: Math.floor(1400 + Math.random() * 100),
        load: Math.floor(60 + Math.random() * 15),
        uptime: 99.9 + (Math.random() * 0.05),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        <Gauge value={metrics.gas} max={100} label="GAS PRICE" unit="G" />
        <Gauge value={metrics.tps} max={2000} label="TPS" />
        <Gauge value={metrics.load} max={100} label="NET LOAD" unit="%" />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>{metrics.uptime.toFixed(2)}%</span>
          <span style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginTop: '0.5rem', letterSpacing: '0.1em' }}>NODE UPTIME</span>
        </div>
      </div>
    </Card>
  );
};
