'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState, useRef } from 'react';

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
  className = '',
  intervalMs = 700,
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
        'Consolas, monospace',
        'Georgia, serif',
        'Impact, sans-serif',
        'Times New Roman, serif',
      ],
    [fontFamilies]
  );

  const styles = useMemo(
    () => (textStyles && textStyles.length > 0 ? textStyles : defaultTextStyles),
    [textStyles]
  );

  const [index, setIndex] = useState(0);
  const [fixedWidth, setFixedWidth] = useState<number | null>(null);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const calculateWidth = () => {
      const widths = spanRefs.current
        .filter((el): el is HTMLSpanElement => el !== null)
        .map((el) => el.getBoundingClientRect().width)
        .filter((w) => w > 0);

      if (widths.length > 0) {
        // Use maximum width so that no text configuration overflows the container
        setFixedWidth(Math.max(...widths));
      }
    };

    calculateWidth();

    const resizeObserver = new ResizeObserver(() => calculateWidth());
    spanRefs.current.forEach((el) => {
      if (el) resizeObserver.observe(el);
    });
    
    window.addEventListener('resize', calculateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateWidth);
    };
  }, [families, styles, text, className]);

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

  const maxCombinations = Math.max(families.length, styles.length);

  return (
    <>
      <div 
        aria-hidden="true" 
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', opacity: 0, zIndex: -10 }}
      >
        {Array.from({ length: maxCombinations }).map((_, i) => {
           const fFam = families[Math.min(i, families.length - 1)] ?? 'inherit';
           const sStyl = styles[Math.min(i, styles.length - 1)] ?? styles[0];
           return (
              <span
                key={i}
                // @ts-ignore
                ref={(el) => { spanRefs.current[i] = el; }}
                className={`${className} ${sStyl.style}`}
                style={{ fontFamily: fFam, whiteSpace: 'nowrap' }}
              >
                {text}
              </span>
           );
        })}
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          className={`${className.replace('justify-center', 'justify-between')} ${activeStyle?.style ?? ''} ${
            isOutline ? 'text-transparent' : ''
          }`}
          style={{
             display: 'inline-flex',
             flexDirection: 'row',
             whiteSpace: 'nowrap',
             width: fixedWidth ? `${fixedWidth}px` : 'auto',
             ...(isOutline
                ? {
                    fontFamily,
                    WebkitTextStroke: '2px rgba(255,255,255,0.9)',
                  }
                : { fontFamily }),
          }}
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={`${index}-${i}-${char}`}
              className="inline-flex items-center justify-center transform-gpu"
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
    </>
  );
}

export { RotatingFontPill };
