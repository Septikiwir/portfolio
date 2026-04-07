'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import ScrollFadeIn from "./ScrollFadeIn";

/* ───── SUB-COMPONENT: StackedProjectCard ───── */
interface Asset {
  url?: string;
  type: 'image' | 'note';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  // FIX 1: rotate disimpan sebagai number (derajat), bukan string '8deg'
  rotate?: number;
  width?: string;
  content?: string;
  className?: string;
}

interface Project {
  title: string;
  tagline: string;
  description: string[];
  bgColor?: string;
  assets: Asset[];
}

function StackedProjectCard({
  project,
  index,
  total,
  range,
  targetScale,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}) {
  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, range, [1, targetScale]);
  const y = useTransform(smoothProgress, range, [0, -30]);

  // FIX 2: top positioning sticky dihitung berdasarkan index
  const stickyTop = index * 24;

  return (
    <div
      className="stacked-card-wrapper"
      style={{ top: `${Math.max(20, stickyTop)}px` }}
    >
      <motion.div
        className="stacked-card editorial-style"
        style={{
          scale,
          y,
          zIndex: index,
          backgroundColor: project.bgColor || '#FFFFFF',
        }}
      >
        <div className="sc-layout">
          <div className="sc-text-content">
            <motion.h2
              className="sc-title-editorial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.title}
            </motion.h2>
            <motion.p
              className="sc-tagline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {project.tagline}
            </motion.p>
            <div className="sc-description">
              {project.description.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="sc-assets">
            {project.assets.map((asset, i) => (
              <motion.div
                key={i}
                className={`sc-asset ${asset.type === 'note' ? 'sc-note' : 'sc-image-asset'}`}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: asset.rotate ?? 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 60,
                  damping: 15,
                  delay: 0.5 + i * 0.2,
                }}
                style={{
                  '--asset-top': asset.top || 'auto',
                  '--asset-right': asset.right || 'auto',
                  '--asset-bottom': asset.bottom || 'auto',
                  '--asset-left': asset.left || 'auto',
                  '--asset-width': asset.width || 'auto',
                } as React.CSSProperties}
              >
                {asset.type === 'image' ? (
                  <img
                    src={asset.url}
                    alt="project-asset"
                    className="sc-img-fluid"
                  />
                ) : (
                  <div className={`sc-note-card ${asset.className || ''}`}>
                    <p>{asset.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───── DATA & MAIN COMPONENT ───── */

// FIX 9: rotate diubah ke number di semua data
const projects: Project[] = [
  {
    title: "Hi, I'm Pramudya :)",
    tagline: "I transform architectural logic into digital product design.",
    description: [
      "I began my journey in physical space, designing how people move through buildings. Today, I translate that same sense of structure into digital environments.",
      "My approach is grounded in system thinking, ensuring every pixel serves a purpose within a larger, meaningful ecosystem.",
    ],
    bgColor: "#FFFFFF",
    assets: [
      {
        url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
        type: 'image',
        top: '15%',
        right: '5%',
        rotate: 8,          // ✅ number, bukan '8deg'
        width: '300px',
      },
    ],
  },
  {
    title: "Design Philosophy",
    tagline: "For me, design is play.",
    description: [
      "Being a Product Designer is the perfect 'impossible triangle'—it connects what I'm good at, what I love, and a career path full of growth.",
      "I believe great design is the perfect intersection of aesthetics, human-centered strategy, and technical feasibility.",
    ],
    bgColor: "#FAFAFA",
    assets: [
      {
        url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
        type: 'image',
        bottom: '20%',
        right: '38%',
        rotate: -6,         // ✅ number
        width: '180px',
      },
      {
        type: 'note',
        content:
          "I'm always 'working.' It looks like work to others, but it feels like play to me. That's how I know no one can compete with me. — Naval Ravikant",
        bottom: '12%',
        right: '5%',
        rotate: 3,          // ✅ number
        width: '260px',
        className: 'sc-note-blue',
      },
    ],
  },
  {
    title: "System Thinking",
    tagline: "Scaling from city blocks to user flows.",
    description: [
      "Whether designing an urban masterplan or a complex enterprise dashboard, the core challenge remains the same: Orchestrating systems.",
      "I help businesses transform abstract complexity into intuitive, scalable solutions that people actually love to use.",
    ],
    bgColor: "#FFFFFF",
    assets: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592be5a5268e?w=800&q=80",
        type: 'image',
        top: '15%',
        right: '5%',
        rotate: -4,         // ✅ number
        width: '340px',
      },
    ],
  },
];

export default function ProjectGrid() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    // FIX 10: section diberi min-height yang cukup (N kartu × 100vh + extra untuk scroll)
    <section
      className="projects-stacked"
      id="projects"
      ref={container}
      data-pj-render-check="v2.2"
      style={{ minHeight: `${(projects.length + 1) * 80}vh` }}
    >
      {/* ───── HEADER ───── */}
      <div className="pj-header-wrap">
        <ScrollFadeIn>
          <div className="pj-label">featured projects</div>
        </ScrollFadeIn>
        <div className="pj-main-title">
          <ScrollFadeIn>
            <div className="pj-journey-text">
              My <span className="pj-highlight">Design</span> Journey
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ───── STACKING CARDS ───── */}
      <div className="pj-stack-container">
        {projects.map((project, i) => {
          // FIX 11: targetScale hanya dikurangi dari kartu-kartu SEBELUMNYA (cards di atas)
          const targetScale = 1 - (projects.length - 1 - i) * 0.05;

          // FIX 12: range disebarkan merata sepanjang scroll progress
          const segmentSize = 1 / projects.length;
          const cardRange: [number, number] = [
            i * segmentSize,
            Math.min((i + 1) * segmentSize + 0.1, 1),
          ];

          return (
            <StackedProjectCard
              key={project.title}
              project={project}
              index={i + 1}
              total={projects.length}
              range={cardRange}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}