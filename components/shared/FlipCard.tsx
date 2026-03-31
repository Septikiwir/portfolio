'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';

const defaultImages = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg'];

export default function FlipCard({
  images = defaultImages,
  intervalMs = 750,
  className,
  style,
}: {
  images?: string[];
  intervalMs?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [flipCount, setFlipCount] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Record<string, true>>({});

  const safeImages = useMemo(
    () => (images.length > 0 ? images : defaultImages),
    [images],
  );

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setFlipCount((prev) => prev + 1);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, shouldReduceMotion]);

  const getIndex = (val: number) =>
    ((val % safeImages.length) + safeImages.length) % safeImages.length;

  const frontIndex =
    flipCount % 2 === 0 ? getIndex(flipCount) : getIndex(flipCount - 1);

  const backIndex =
    flipCount % 2 === 1 ? getIndex(flipCount) : getIndex(flipCount - 1);

  const frontSrc = safeImages[frontIndex];
  const backSrc = safeImages[backIndex];
  const frontFailed = Boolean(failedSrcs[frontSrc]);
  const backFailed = Boolean(failedSrcs[backSrc]);

  return (
    <motion.div
      className={
        className ??
        'relative rounded-xl border border-white/25 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.25)]'
      }
      style={{
        width: 'clamp(4.5rem, 12vw, 8.5rem)',
        aspectRatio: '3/4',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      animate={shouldReduceMotion ? undefined : { rotateY: flipCount * 180, rotateZ: 2 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.45, ease: 'easeInOut' }}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[0.72rem]"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-black/10" />
        {!frontFailed && (
          <img
            src={frontSrc}
            alt="front"
            className="relative h-full w-full object-cover grayscale-[30%]"
            draggable={false}
            onError={() => setFailedSrcs((prev) => ({ ...prev, [frontSrc]: true }))}
          />
        )}
      </div>

      <div
        className="absolute inset-0 overflow-hidden rounded-[0.72rem]"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-black/10" />
        {!backFailed && (
          <img
            src={backSrc}
            alt="back"
            className="relative h-full w-full object-cover grayscale-[30%]"
            draggable={false}
            onError={() => setFailedSrcs((prev) => ({ ...prev, [backSrc]: true }))}
          />
        )}
      </div>
    </motion.div>
  );
}
