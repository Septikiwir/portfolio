'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const defaultTextStyles = [
  { style: 'font-black tracking-tighter uppercase', outline: false },
  { style: 'font-semibold tracking-normal uppercase', outline: false },
  { style: 'font-light tracking-normal uppercase', outline: false },
  { style: 'font-bold tracking-normal uppercase', outline: false },
  { style: 'font-thin tracking-normal uppercase', outline: false },
  { style: 'font-bold tracking-tight uppercase', outline: true },
];

export default function RotatingFontPill({
  text,
  className,
  intervalMs = 500,
  fontFamilies,
  textStyles,
}: {
  text: string;
  className?: string;
  intervalMs?: number;
  fontFamilies?: string[];
  textStyles?: Array<{ style: string; outline: boolean }>;
}) {
  const shouldReduceMotion = useReducedMotion();

  const families = useMemo(
    () =>
      fontFamilies ?? [
        'var(--font-manrope)',
        'var(--font-inter)',
        'var(--font-dm-sans)',
        'var(--font-space-grotesk)',
        'var(--font-plus-jakarta)',
      ],
    [fontFamilies],
  );

  const [index, setIndex] = useState(0);

  const styles = useMemo(
    () => (textStyles && textStyles.length > 0 ? textStyles : defaultTextStyles),
    [textStyles],
  );

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (families.length <= 1 && styles.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.max(families.length, styles.length));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [families, styles, intervalMs, shouldReduceMotion]);

  const fontFamily = families[Math.min(index, families.length - 1)] ?? 'inherit';
  const activeStyle = styles[Math.min(index, styles.length - 1)] ?? styles[0];
  const isOutline = Boolean(activeStyle?.outline);
  const letters = useMemo(() => Array.from(text), [text]);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={index}
        className={`${className ?? ''} ${activeStyle?.style ?? ''} ${
          isOutline ? 'text-transparent' : ''
        }`}
        style={
          isOutline
            ? {
                fontFamily,
                WebkitTextStroke: '1px rgba(255,255,255,0.9)',
              }
            : { fontFamily }
        }
        initial={{ opacity: 0, filter: 'blur(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(6px)' }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={`${index}-${i}-${char}`}
            className="inline-block"
            initial={{ y: 6, opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -6, opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.28, ease: 'easeOut', delay: i * 0.012 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}

export { RotatingFontPill };
