'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const CYCLE_INTERVAL = 750;
const TOTAL_CYCLES = textStyles.length;

interface FeaturedProjectsBannerProps {
  onComplete?: () => void;
}

export default function FeaturedProjectsBanner({ onComplete }: FeaturedProjectsBannerProps) {
  const [flipCount, setFlipCount] = useState(0);
  const [phase, setPhase] = useState<'normal' | 'separated' | 'sliding' | 'snapped'>('normal');

  const handleComplete = useCallback(() => {
    // 1. Show separated pills (Huge text fades out)
    setPhase('separated');

    // 2. Wait for them to fully enter
    setTimeout(() => {
      setPhase('sliding');

      // 3. Wait for the slide to touch
      setTimeout(() => {
        // 4. Snap to the single merged pill instantly (no fade, no blink)
        setPhase('snapped');

        // 5. Wait a brief moment before triggering Hero handoff
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 230);
      }, 920);
    }, 920);
  }, [onComplete]);

  useEffect(() => {
    if (phase !== 'normal') return;
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
  }, [phase, handleComplete]);

  const getIndex = (val: number) => ((val % images.length) + images.length) % images.length;
  const frontIndex = flipCount % 2 === 0 ? getIndex(flipCount) : getIndex(flipCount - 1);
  const backIndex = flipCount % 2 === 1 ? getIndex(flipCount) : getIndex(flipCount - 1);
  const currentTextStyle = textStyles[flipCount % textStyles.length];
  const progress = Math.min(flipCount / (TOTAL_CYCLES - 1), 1);

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

      {/* Dynamic Texts overlay — uses layoutId so the text morphs directly into the pill */}
      {(phase === 'normal' || phase === 'separated') && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 w-full max-w-[1200px] mx-auto text-center"
          style={{ gap: phase === 'normal' ? '35vh' : '35vh' }}
        >
          {/* Top: UI/UX — morphs from big text into pill */}
          <div className="w-full flex items-center justify-center overflow-visible relative">
            <motion.div
              layoutId="pill-uiux"
              transition={{ layout: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }}
              className={
                phase === 'normal'
                  ? `leading-none m-0 select-none ${currentTextStyle.size} ${currentTextStyle.style}`
                  : "inline-flex items-center px-8 py-3 rounded-[999px] text-xl md:text-3xl font-sans font-semibold tracking-wide bg-[#3b3a38]/10 border border-[#3b3a38]/20"
              }
              style={
                phase === 'normal'
                  ? {
                      color: currentTextStyle.outline ? 'transparent' : '#3b3a38',
                      WebkitTextStroke: currentTextStyle.outline ? '2px #3b3a38' : 'none',
                      paintOrder: 'stroke fill',
                      transition: 'color 0.6s ease, -webkit-text-stroke 0.6s ease',
                    }
                  : { color: '#3b3a38' }
              }
            >
              UI/UX
            </motion.div>
          </div>

          {/* Bottom: Designer — morphs from big text into pill */}
          <div className="w-full flex items-center justify-center overflow-visible relative">
            <motion.div
              layoutId="pill-designer"
              transition={{ layout: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }}
              className={
                phase === 'normal'
                  ? `leading-none m-0 select-none ${currentTextStyle.size} ${currentTextStyle.style}`
                  : "inline-flex items-center px-8 py-3 rounded-[999px] text-xl md:text-3xl font-sans font-semibold tracking-wide bg-[#3b3a38]/10 border border-[#3b3a38]/20"
              }
              style={
                phase === 'normal'
                  ? {
                      color: currentTextStyle.outline ? 'transparent' : '#3b3a38',
                      WebkitTextStroke: currentTextStyle.outline ? '2px #3b3a38' : 'none',
                      paintOrder: 'stroke fill',
                      transition: 'color 0.6s ease, -webkit-text-stroke 0.6s ease',
                    }
                  : { color: '#3b3a38' }
              }
            >
              Designer
            </motion.div>
          </div>
        </div>
      )}

      {phase === 'sliding' && (
        <div className="absolute inset-0 pointer-events-none z-20 w-full max-w-[1200px] mx-auto text-center">
          {/* The individual pills sliding in to perfectly lock together */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[22vh] flex items-center justify-center gap-0">
            <motion.div
              layoutId="pill-uiux"
              transition={{ layout: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } }}
              className="inline-flex items-center pl-8 pr-1 py-3 rounded-l-[999px] rounded-r-none text-xl md:text-3xl font-sans font-semibold tracking-wide bg-[#3b3a38]/10 text-[#3b3a38] border border-[#3b3a38]/20 border-r-0"
            >
              UI/UX
            </motion.div>
            <motion.div
              layoutId="pill-designer"
              transition={{ layout: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } }}
              className="inline-flex items-center pr-8 pl-1 py-3 rounded-r-[999px] rounded-l-none text-xl md:text-3xl font-sans font-semibold tracking-wide bg-[#3b3a38]/10 text-[#3b3a38] border border-[#3b3a38]/20 border-l-0"
            >
              Designer
            </motion.div>
          </div>
        </div>
      )}

      {phase === 'snapped' && (
        <div className="absolute inset-0 pointer-events-none z-20 w-full max-w-[1200px] mx-auto text-center">
          {/* The single final pill that HeroSection will latch onto */}
          <motion.div
            layoutId="designer-pill"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[22vh] inline-flex items-center px-8 py-3 rounded-[999px] text-xl md:text-3xl font-sans font-semibold tracking-wide bg-[#3b3a38]/10 text-[#3b3a38] border border-[#3b3a38]/20"
          >
            UI/UX Designer
          </motion.div>
        </div>
      )}

      {/* Center Photo Card - PERSISTS AND EXITS SMOOTHLY TO HERO */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <motion.div
          layoutId="hero-card"
          className="relative shrink-0 rounded-xl shadow-2xl border-4 border-[#e8e6e1]"
          style={{
            width: 'clamp(4.5rem, 12vw, 8.5rem)',
            aspectRatio: '3/4',
            transformStyle: 'preserve-3d'
          }}
          animate={{ rotateY: flipCount * 180, rotateZ: 2 }}
          transition={{ duration: 0.45, ease: "easeInOut", layout: { duration: 1.15, ease: [0.25, 1, 0.5, 1] } }}
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

      {/* Progress bar */}
      <AnimatePresence>
        {phase === 'normal' && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-0 left-0 w-full h-[3px] bg-[#3b3a38]/10 z-20"
          >
            <motion.div
              className="h-full bg-[#3b3a38]/60"
              initial={{ width: '0%' }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
