'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400"
];

const textStyles = [
  { style: "font-black tracking-tighter uppercase", size: "text-[clamp(2.5rem,7vw,9.5rem)]" },
  { style: "font-semibold tracking-normal uppercase", size: "text-[clamp(2.5rem,7vw,8.5rem)]" },
  { style: "font-light tracking-[0.2em] uppercase", size: "text-[clamp(2.2rem,6vw,7.5rem)]" },
  { style: "font-bold tracking-[0.05em] uppercase", size: "text-[clamp(2.5rem,7vw,8rem)]" },
  { style: "font-thin tracking-[0.4em] uppercase", size: "text-[clamp(2rem,5vw,6.5rem)]" }
];

export default function FeaturedProjectsBanner() {
  const [flipCount, setFlipCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipCount(prev => prev + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (val: number) => ((val % images.length) + images.length) % images.length;

  // Update only the target face of the flip, keeping the previous face static while it rotates away
  const frontIndex = flipCount % 2 === 0 ? getIndex(flipCount) : getIndex(flipCount - 1);
  const backIndex = flipCount % 2 === 1 ? getIndex(flipCount) : getIndex(flipCount - 1);

  const currentTextStyle = textStyles[flipCount % textStyles.length];

  return (
    <section className="w-full bg-[#E5E3DB] h-[650px] md:h-[850px] lg:h-[900px] overflow-hidden flex items-center justify-center relative shadow-inner" style={{ perspective: '1200px' }}>
      {/* Optional subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-[1200px] mx-auto text-center h-full">

        {/* Top Text Fixed Container */}
        <div className="w-full h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center overflow-visible">
          <h2 className={`text-[#3b3a38] leading-none m-0 select-none transition-all duration-1000 ${currentTextStyle.size} ${currentTextStyle.style}`}>
            UI/UX
          </h2>
        </div>

        {/* Center Photo Card Area (Fits card exactly) */}
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
            {/* FRONT FACE */}
            <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              <img
                src={images[frontIndex]}
                alt="Featured works front"
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>

            {/* BACK FACE */}
            <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <img
                src={images[backIndex]}
                alt="Featured works back"
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text Fixed Container */}
        <div className="w-full h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center overflow-visible">
          <h2 className={`text-[#3b3a38] leading-none m-0 select-none transition-all duration-1000 ${currentTextStyle.size} ${currentTextStyle.style}`}>
            Designer
          </h2>
        </div>

      </div>
    </section>
  );
}
