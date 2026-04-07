"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  staggerChildren?: boolean;
  staggerSelector?: string;
}

export default function ScrollFadeIn({
  children,
  className = "",
  style,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Hanya sembunyikan jika konten lari/berada di bawah viewport.
          // Jika scroll ke atas dan elemen keluar lewat bawah layar, top-nya akan lebih dari > 0
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "-5% 0px -5% 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40, filter: "blur(6px)", scale: 0.98 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
          : { opacity: 0, y: 40, filter: "blur(6px)", scale: 0.98 }
      }
      transition={{
        duration: 0.6,
        ease: isVisible ? "easeOut" : "easeIn",
      }}
    >
      {children}
    </motion.div>
  );
}
