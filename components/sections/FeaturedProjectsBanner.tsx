'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg"
];

const textStyles = [
  { style: "font-black tracking-tighter uppercase", size: "text-[clamp(2.5rem,7vw,9.5rem)]", outline: false },
  { style: "font-semibold tracking-normal uppercase", size: "text-[clamp(2.5rem,7vw,8.5rem)]", outline: false },
  { style: "font-light tracking-[0.2em] uppercase", size: "text-[clamp(2.2rem,6vw,7.5rem)]", outline: false },
  { style: "font-bold tracking-[0.05em] uppercase", size: "text-[clamp(2.5rem,7vw,8rem)]", outline: false },
  { style: "font-thin tracking-[0.4em] uppercase", size: "text-[clamp(2rem,5vw,6.5rem)]", outline: false },
  { style: "font-bold tracking-tight uppercase", size: "text-[clamp(2.5rem,7vw,9rem)]", outline: true },
];

const CYCLE_INTERVAL = 1000;
const TOTAL_CYCLES = textStyles.length;

interface FeaturedProjectsBannerProps {
  onComplete?: () => void;
}

export default function FeaturedProjectsBanner({ onComplete }: FeaturedProjectsBannerProps) {
  const [flipCount, setFlipCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleComplete = useCallback(() => {
    setIsDone(true);
    // Wait for the merged state to render, then trigger transition
    if (onComplete) {
      setTimeout(() => onComplete(), 900);
    }
  }, [onComplete]);

  useEffect(() => {
    if (isDone) return;
    const interval = setInterval(() => {
      setFlipCount(prev => {
        const next = prev + 1;
        if (next >= TOTAL_CYCLES) {
          clearInterval(interval);
          handleComplete();
          return next;
        }
        return next;
      });
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [isDone, handleComplete]);

  const getIndex = (val: number) => ((val % images.length) + images.length) % images.length;
  const frontIndex = flipCount % 2 === 0 ? getIndex(flipCount) : getIndex(flipCount - 1);
  const backIndex = flipCount % 2 === 1 ? getIndex(flipCount) : getIndex(flipCount - 1);
  const currentTextStyle = textStyles[flipCount % textStyles.length];
  const progress = Math.min(flipCount / (TOTAL_CYCLES - 1), 1);

  /* ── Final "merged" state with layoutId elements ── */
  if (isDone) {
    return (
      <section
        className="w-full bg-[#E5E3DB] h-screen overflow-hidden flex items-center justify-center relative"
        style={{ perspective: '1200px' }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <div className="flex flex-col items-center justify-center relative z-10 gap-8">
          {/* Merged "UI/UX Designer" text with layoutId */}
          <motion.span
            layoutId="designer-pill"
            className="inline-flex items-center px-8 py-3 rounded-full text-2xl md:text-3xl font-sans font-semibold tracking-wide bg-[#3b3a38]/10 text-[#3b3a38] border border-[#3b3a38]/20"
            transition={{ layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
          >
            UI/UX Designer
          </motion.span>

          {/* Card with layoutId */}
          <motion.div
            layoutId="hero-card"
            className="relative shrink-0 rounded-xl shadow-2xl border-4 border-[#e8e6e1]"
            style={{
              width: 'clamp(4.5rem, 12vw, 8.5rem)',
              aspectRatio: '3/4',
              transformStyle: 'preserve-3d'
            }}
            animate={{ rotateY: flipCount * 180, rotateZ: 2 }}
            transition={{ duration: 0.4, ease: "easeInOut", layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              <img src={images[frontIndex]} alt="Featured works front" className="w-full h-full object-cover grayscale-[30%]" />
            </div>
            <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <img src={images[backIndex]} alt="Featured works back" className="w-full h-full object-cover grayscale-[30%]" />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ── Normal intro animation state ── */
  return (
    <section
      className="w-full bg-[#E5E3DB] h-screen overflow-hidden flex items-center justify-center relative shadow-inner"
      style={{ perspective: '1200px' }}
    >
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-[1200px] mx-auto text-center h-full">
        {/* Top Text */}
        <div className="w-full h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center overflow-visible relative">
          <h2
            className={`absolute leading-none m-0 select-none ${currentTextStyle.size} ${currentTextStyle.style}`}
            style={{
              color: '#3b3a38',
              opacity: currentTextStyle.outline ? 0 : 1,
              transition: 'all 1s ease, opacity 0.8s ease',
            }}
          >
            UI/UX
          </h2>
          <h2
            className={`absolute leading-none m-0 select-none ${currentTextStyle.size} ${currentTextStyle.style}`}
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #3b3a38',
              paintOrder: 'stroke fill',
              opacity: currentTextStyle.outline ? 1 : 0,
              transition: 'all 1s ease, opacity 0.8s ease',
            }}
          >
            UI/UX
          </h2>
        </div>

        {/* Center Photo Card */}
        <div className="flex items-center justify-center">
          <motion.div
            className="relative shrink-0 rounded-xl shadow-2xl border-4 border-[#e8e6e1]"
            style={{
              width: 'clamp(4.5rem, 12vw, 8.5rem)',
              aspectRatio: '3/4',
              transformStyle: 'preserve-3d'
            }}
            animate={{ rotateY: flipCount * 180, rotateZ: 2 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              <img src={images[frontIndex]} alt="Featured works front" className="w-full h-full object-cover grayscale-[30%]" />
            </div>
            <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <img src={images[backIndex]} alt="Featured works back" className="w-full h-full object-cover grayscale-[30%]" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <div className="w-full h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center overflow-visible relative">
          <h2
            className={`absolute leading-none m-0 select-none ${currentTextStyle.size} ${currentTextStyle.style}`}
            style={{
              color: '#3b3a38',
              opacity: currentTextStyle.outline ? 0 : 1,
              transition: 'all 1s ease, opacity 0.8s ease',
            }}
          >
            Designer
          </h2>
          <h2
            className={`absolute leading-none m-0 select-none ${currentTextStyle.size} ${currentTextStyle.style}`}
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #3b3a38',
              paintOrder: 'stroke fill',
              opacity: currentTextStyle.outline ? 1 : 0,
              transition: 'all 1s ease, opacity 0.8s ease',
            }}
          >
            Designer
          </h2>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#3b3a38]/10 z-20">
        <motion.div
          className="h-full bg-[#3b3a38]/60"
          initial={{ width: '0%' }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
}
