'use client';

import React, { useEffect, useRef } from 'react';
import styles from './FluxVisualizer.module.css';

export const FluxVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', resize);
    resize();

    const createParticle = () => ({
      x: Math.random() * canvas.offsetWidth,
      y: canvas.offsetHeight + 10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -Math.random() * 2 - 1,
      life: 1,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (particles.length < 50 && Math.random() > 0.8) {
        particles.push(createParticle());
      }

      particles = particles.filter(p => p.life > 0);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.005;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.life * 0.5})`;
        ctx.fill();

        // Connect particles
        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 50) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${p.life * p2.life * 0.1})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay}>
        <div className={styles.title}>Network Flux Velocity</div>
        <div className={styles.value}>1.42 GB/S</div>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <div className={styles.title}>Handshake Latency</div>
            <div className={styles.value} style={{ fontSize: '0.75rem' }}>14MS</div>
          </div>
          <div>
            <div className={styles.title}>Peer Connectivity</div>
            <div className={styles.value} style={{ fontSize: '0.75rem' }}>128 NODES</div>
          </div>
          <div>
            <div className={styles.title}>Global Hashrate</div>
            <div className={styles.value} style={{ fontSize: '0.75rem' }}>452.1 TH/S</div>
          </div>
        </div>
      </div>
    </div>
  );
};
