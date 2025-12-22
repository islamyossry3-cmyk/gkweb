'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

type AnimationVariant = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none';

const getVariants = (variant: AnimationVariant, amount: number) => {
  switch (variant) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
      };
    case 'slideUp':
      return {
        initial: { opacity: 0, y: amount },
        animate: { opacity: 1, y: 0 }
      };
    case 'slideDown':
      return {
        initial: { opacity: 0, y: -amount },
        animate: { opacity: 1, y: 0 }
      };
    case 'slideLeft':
      return {
        initial: { opacity: 0, x: amount },
        animate: { opacity: 1, x: 0 }
      };
    case 'slideRight':
      return {
        initial: { opacity: 0, x: -amount },
        animate: { opacity: 1, x: 0 }
      };
    case 'scale':
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 }
      };
    case 'none':
      return {
        initial: {},
        animate: {}
      };
    default:
      return {
        initial: { opacity: 0, y: amount },
        animate: { opacity: 1, y: 0 }
      };
  }
};

export function Reveal({
  children,
  delay = 0,
  variant = 'slideUp',
  amount = 20,
  duration = 0.6
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: AnimationVariant;
  amount?: number;
  duration?: number;
}) {
  const variants = getVariants(variant, amount);

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: '-60px', amount: 0.2 }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
