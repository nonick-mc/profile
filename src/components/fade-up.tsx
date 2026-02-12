'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, duration = 0.6, className = '' }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
}
