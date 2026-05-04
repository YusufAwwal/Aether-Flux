'use client';

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export const ValueCounter = ({ value }: { value: number }) => {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => `$${v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <motion.h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
      {display}
    </motion.h2>
  );
};
