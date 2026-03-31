'use client';

import { motion } from 'framer-motion';

interface AnimatedDesignerPillProps {
  currentTextStyle: {
    style: string;
    outline: boolean;
  };
}

export default function AnimatedDesignerPill({
  currentTextStyle,
}: AnimatedDesignerPillProps) {
  return (
    <motion.span
      layoutId="designer-pill"
      className="inline-flex items-center rounded-full border border-white/10 bg-white/15 px-5 py-1.5 text-[0.55em] font-semibold backdrop-blur-md"
      transition={{
        layout: { duration: 0.77, ease: [0.25, 1, 0.5, 1] },
      }}
    >
      <div className="relative inline-flex items-center justify-center">
        <span
          className={`absolute ${currentTextStyle.style}`}
          style={{
            color: '#ffffff',
            opacity: currentTextStyle.outline ? 0 : 1,
            transition: 'all 0.77s ease, opacity 0.6s ease',
            whiteSpace: 'nowrap',
          }}
        >
          UI/UX Designer
        </span>

        <span
          className={`absolute ${currentTextStyle.style}`}
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #ffffff',
            paintOrder: 'stroke fill',
            opacity: currentTextStyle.outline ? 1 : 0,
            transition: 'all 0.46s ease, opacity 0.4s ease',
            whiteSpace: 'nowrap',
          }}
        >
          UI/UX Designer
        </span>

        <span
          className="invisible font-thin uppercase tracking-[0.01em]"
          style={{ whiteSpace: 'nowrap' }}
        >
          UI/UX Designer
        </span>
      </div>
    </motion.span>
  );
}
