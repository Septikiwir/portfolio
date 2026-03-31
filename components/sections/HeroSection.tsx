'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg"
];

const CYCLE_INTERVAL = 1000;

const textStyles = [
  { style: "font-black tracking-tighter uppercase", outline: false },
  { style: "font-semibold tracking-normal uppercase", outline: false },
  { style: "font-light tracking-normal uppercase", outline: false },
  { style: "font-bold tracking-normal uppercase", outline: false },
  { style: "font-thin tracking-normal uppercase", outline: false },
  { style: "font-bold tracking-tight uppercase", outline: true },
];

/* ─── BlurIn Animation Component ────────────────────────────── */
interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

function BlurIn({ children, delay = 0, duration = 0.6, className = '' }: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(15px)', y: 30 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Inline Pill Badge Component ────────────────────────────── */
interface PillProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
  delay?: number;
  layoutId?: string;
}

function Pill({ children, variant = 'outlined', delay = 0, layoutId }: PillProps) {
  const base = 'inline-flex items-center px-5 py-1.5 rounded-full text-[0.55em] font-sans font-semibold tracking-normal align-middle mx-1 translate-y-[-0.08em]';
  const styles = variant === 'filled'
    ? `${base} bg-white/15 backdrop-blur-md text-white border border-white/10`
    : `${base} border border-white/25 text-white/90 backdrop-blur-sm`;

  return (
    <motion.span
      layoutId={layoutId}
      initial={layoutId ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4, delay: layoutId ? 0 : delay, ease: [0.25, 1, 0.5, 1],
        layout: { duration: 0.77, ease: [0.25, 1, 0.5, 1] },
      }}
      className={styles}
    >
      {children}
    </motion.span>
  );
}

/* ─── SplitText Animation Component ─────────────────────────── */
interface SplitTextProps {
  children: string;
  className?: string;
  wordDelay?: number;
  duration?: number;
}

function SplitText({ children, className = '', wordDelay = 0.04, duration = 0.46 }: SplitTextProps) {
  const words = children.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: i * wordDelay,
            ease: [0.25, 1, 0.5, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── WebGL Shader Background ──────────────────────────────── */

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_mouseIn;

  // Hash for noise
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)),
             dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                   dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
               mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                   dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    float t = u_time * 0.08;

    // ─── Curtain panel effect ─────────────────────────────────
    // Number of panels across the width
    float panelCount = 14.0;
    
    // Very subtle horizontal sway — like fabric breathing
    float sway = sin(uv.y * 2.0 + t * 1.5) * 0.008
               + sin(uv.y * 4.5 + t * 2.2) * 0.004;
    float swayedX = uv.x + sway;
    
    // Panel position (0-1 within each panel)
    float panelPos = fract(swayedX * panelCount);
    
    // Create the panel fold shape — triangle wave for flat panels with creased edges
    // abs(panelPos - 0.5) * 2.0 gives V-shape: 1 at edges, 0 at center
    float fold = abs(panelPos - 0.5) * 2.0;
    
    // Smooth the fold for satin-like appearance
    float panelShading = smoothstep(0.0, 1.0, fold);
    
    // Panel brightness: center of panel is brighter, edges have shadow crease
    // Invert so center is bright
    float panelBright = 1.0 - panelShading * 0.45;
    
    // Add subtle variation per panel (each panel slightly different brightness)
    float panelIndex = floor(swayedX * panelCount);
    float panelVariation = sin(panelIndex * 3.7 + 1.5) * 0.06;
    panelBright += panelVariation;
    
    // ─── Vertical flow / subtle light movement ────────────────
    // Very gentle brightness variation flowing down
    float vertFlow = noise(vec2(uv.x * 2.0, uv.y * 1.5 - t * 1.0)) * 0.08;
    float vertFlow2 = noise(vec2(uv.x * 3.5 + 5.0, uv.y * 2.5 - t * 0.7)) * 0.05;
    panelBright += vertFlow + vertFlow2;
    
    // ─── Overall lighting — brighter center-left, darker right and edges ──
    // Horizontal light falloff (brighter center-left as in reference)
    float lightX = smoothstep(-0.2, 0.35, uv.x) * smoothstep(1.1, 0.55, uv.x);
    // Vertical light falloff (brighter upper half)
    float lightY = smoothstep(-0.1, 0.3, uv.y) * smoothstep(1.1, 0.6, uv.y);
    float lighting = lightX * lightY;
    
    panelBright *= mix(0.35, 1.0, lighting);
    
    // ─── Color: pure dark charcoal/gray, no blue ──────────────
    vec3 darkest = vec3(0.025, 0.025, 0.03);
    vec3 midGray = vec3(0.10, 0.10, 0.11);
    vec3 lightGray = vec3(0.20, 0.20, 0.22);
    vec3 highlight = vec3(0.28, 0.28, 0.30);
    
    // Map panel brightness to color
    vec3 color = darkest;
    color = mix(color, midGray, smoothstep(0.35, 0.55, panelBright));
    color = mix(color, lightGray, smoothstep(0.55, 0.75, panelBright));
    color = mix(color, highlight, smoothstep(0.75, 0.95, panelBright));
    
    // Subtle satin sheen on panel faces
    float sheen = pow(max(0.0, 1.0 - fold), 3.0) * 0.03;
    color += vec3(sheen);
    
    // ─── Edge vignette — darker edges for depth ───────────────
    vec2 vigUV = (uv - 0.5) * vec2(1.4, 1.1);
    float vig = 1.0 - smoothstep(0.25, 0.85, length(vigUV));
    color *= mix(0.4, 1.0, vig);
    
    // ─── Bottom darkening (matches gradient overlay) ──────────
    color *= smoothstep(-0.05, 0.35, uv.y) * 0.3 + 0.7;

    // ─── Mouse interaction: dark void / depth effect ──────────
    if (u_mouseIn > 0.01) {
      vec2 mouseUV = u_mouse;
      vec2 diff = uv - mouseUV;
      diff.x *= aspect;
      float dist = length(diff);
      
      // Larger radius for visible effect
      float radius = 0.22;
      
      // Soft feathered void mask
      float voidMask = 1.0 - smoothstep(0.0, radius, dist);
      voidMask = pow(voidMask, 1.5); // softer falloff
      voidMask *= u_mouseIn; // fade in/out smoothly
      
      // Strong darkening in the void center
      color *= 1.0 - voidMask * 0.7;
      
      // Warp/distort the panel pattern near cursor
      float warpedFold = abs(fract((swayedX + diff.x * voidMask * 0.3) * panelCount) - 0.5) * 2.0;
      float warpShading = smoothstep(0.0, 1.0, warpedFold);
      float warpBright = (1.0 - warpShading * 0.5) * 0.15;
      color -= vec3(warpBright * voidMask * 0.5);
      
      // Subtle noise distortion inside void
      float voidNoise = fbm(vec2(
        uv.x * 8.0 + diff.x * 12.0 * voidMask,
        uv.y * 8.0 + diff.y * 12.0 * voidMask - t * 3.0
      ));
      color += vec3(0.02, 0.02, 0.025) * voidNoise * voidMask;
      
      // Faint ring glow at void edge
      float ring = smoothstep(radius * 0.7, radius * 0.9, dist) 
                 * smoothstep(radius * 1.15, radius * 0.95, dist);
      color += vec3(0.04, 0.04, 0.05) * ring * u_mouseIn * 3.0;
    }

    color = clamp(color, 0.0, 1.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function HeroBackground() {
  return null;
}

/* ─── Hero Section ──────────────────────────────────────────── */
export default function HeroSection() {
  // Start with flipCount of 6 so it aligns with the end of the 6-cycle intro banner seamlessly!
  const [flipCount, setFlipCount] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipCount(prev => prev + 1);
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (val: number) => ((val % images.length) + images.length) % images.length;
  const frontIndex = flipCount % 2 === 0 ? getIndex(flipCount) : getIndex(flipCount - 1);
  const backIndex = flipCount % 2 === 1 ? getIndex(flipCount) : getIndex(flipCount - 1);

  const currentTextStyle = textStyles[flipCount % textStyles.length];

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#070612' }}
    >
      {/* Image Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      >
        <img
          src="https://images.pexels.com/photos/5853347/pexels-photo-5853347.png?auto=compress&cs=tinysrgb&w=1920"
          alt="Serene dark ocean waves"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#070612]/70 mix-blend-multiply" />
      </motion.div>

      {/* Floating Photo Card from intro */}
      <motion.div
        layoutId="hero-card"
        className="absolute z-30 rounded-xl shadow-2xl border-4 border-[#e8e6e1]"
        style={{
          top: 0,
          bottom: 0,
          left: 800,
          right: 0,
          margin: 'auto',
          width: 'clamp(6.3rem, 16.8vw, 11.9rem)',
          aspectRatio: '3/4',
          transformStyle: 'preserve-3d'
        }}
        animate={{ rotateY: flipCount * 180, rotateZ: 2 }}
        transition={{ duration: 0.3, ease: "easeInOut", layout: { duration: 0.77, ease: [0.25, 1, 0.5, 1] } }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img src={images[frontIndex]} alt="Featured works front" className="w-full h-full object-cover grayscale-[30%]" />
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 overflow-hidden rounded-lg bg-gray-200"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img src={images[backIndex]} alt="Featured works back" className="w-full h-full object-cover grayscale-[30%]" />
        </div>
      </motion.div>

      {/* Bottom fade gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.77, ease: 'easeOut', delay: 0.23 }}
        className="absolute bottom-0 left-0 w-full h-40 z-10"
        style={{
          background: 'linear-gradient(to top, #070612, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-10">
            {/* Top group: availability badge + heading + subtitle */}
            <div className="flex flex-col gap-8">

              {/* Main Heading — Mixed typography with inline pills */}
              <BlurIn delay={0.15} duration={0.7}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] font-serif italic font-normal leading-[1.25] lg:leading-[1.3] text-white max-w-5xl">
                  Hi! I&apos;m
                  <Pill variant="outlined" delay={0.3}>Pramudya</Pill>
                  <br className="hidden md:block" />
                  a
                  <Pill variant="filled" delay={0.45} layoutId="designer-pill">
                    <div className="relative inline-flex items-center justify-center">
                      <span
                        className={`absolute ${currentTextStyle.style}`}
                        style={{
                          color: '#ffffff',
                          opacity: currentTextStyle.outline ? 0 : 1,
                          transition: 'all 0.77s ease, opacity 0.6s ease',
                          whiteSpace: 'nowrap'
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
                          whiteSpace: 'nowrap'
                        }}
                      >
                        UI/UX Designer
                      </span>
                      <span
                        className="invisible font-thin tracking-[0.01em] uppercase"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        UI/UX Designer
                      </span>
                    </div>
                  </Pill>
                  from
                  <Pill variant="outlined" delay={0.6}>Yogyakarta</Pill>
                  <br className="hidden md:block" />
                </h1>
              </BlurIn>

              {/* Subtitle */}
              <BlurIn delay={0.5} duration={0.6}>
                <p className="text-white/60 text-base md:text-lg font-sans font-normal leading-relaxed max-w-2xl">
                  I&apos;m dedicated to crafting websites that bring your ideas to life, combining
                  design and development to deliver fast, impactful results.
                </p>
              </BlurIn>
            </div>

            {/* CTA Button */}
            <BlurIn delay={0.7} duration={0.6}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 w-fit"
              >
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#BFFF00] text-[#070612] font-semibold text-sm tracking-wide hover:bg-[#d4ff4d] transition-colors duration-300">
                  See what i can do
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white group-hover:bg-white/10 transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </BlurIn>
          </div>
        </div>
      </div>
    </section>
  );
}
