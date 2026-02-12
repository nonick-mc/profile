'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export function AnimatedImage({ src, width, height, alt }: AnimatedImageProps) {
  return (
    <motion.div
      whileHover={{ rotate: 5, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </motion.div>
  );
}
