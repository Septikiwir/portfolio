'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
  hoverRotate?: number;
  width?: string;
  mobileWidth?: string;
  mobileBottom?: string;
  mobileLeft?: string;
  mobileRight?: string;
  mobileTop?: string;
  content?: string;
  className?: string;
}

interface Sticker {
  url?: string;
  pos: { [key: string]: string | number };
  mobilePos?: { [key: string]: string | number };
  delay: number;
  rot: number;
  color?: string;
  width?: string;
  mobileWidth?: string;
  height?: string;
}

interface Project {
  title: string;
  tagline: string;
  tags?: string[];
  description: string[];
  bgColor?: string;
  gradientColor?: string;
  url?: string;
  assets: Asset[];
  stickers?: Sticker[];
}

function StackedProjectCard({
  project,
  index,
  total,
  range,
  targetScale,
  progress,
  isMobile,
}: {
  project: Project;
  index: number;
  total: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
  isMobile: boolean;
}) {

  // CURSOR TRACKING
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, range, [1, targetScale]);
  const y = useTransform(smoothProgress, range, [0, -30]);

  // FIX 2: top positioning sticky dihitung berdasarkan index
  const stickyTop = index * 24;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      className="stacked-card-wrapper"
      style={{ top: `${Math.max(20, stickyTop)}px` }}
    >
      <motion.div
        className="stacked-card editorial-style"
        role="button"
        tabIndex={0}
        onClick={() => project.url && window.open(project.url, '_blank')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            project.url && window.open(project.url, '_blank');
          }
        }}
        initial="initial"
        animate={isMobile ? "hover" : "initial"}
        whileHover={isMobile ? undefined : "hover"}
        whileTap={{ scale: 0.97 }}
        onMouseMove={handleMouseMove}
        style={{
          scale,
          y,
          zIndex: index,
          backgroundColor: project.bgColor || '#F5F5F7',
          top: stickyTop,
          cursor: 'pointer'
        }}
      >
        <div className="sc-layout">
          {!isMobile && (
            <motion.div
              className="sc-hover-button cursor-tracker"
              style={{
                x: springX,
                y: springY,
                translateX: "20px",
                translateY: "-50%",
                position: 'absolute',
                left: 0,
                top: 0
              }}
              variants={{
                initial: { opacity: 0, scale: 0.5 },
                hover: { opacity: 1, scale: 1 }
              }}
            >
              View project
            </motion.div>
          )}

          {/* BOTTOM GRADIENT OVERLAY */}
          <motion.div
            className="sc-bottom-gradient"
            style={{
              background: `linear-gradient(to top, ${project.gradientColor || 'rgba(0,0,0,0.15)'}, transparent)`
            }}
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          />

          {/* FLOATING STICKERS */}
          <motion.div className="sc-stickers-layer">
            {(project.stickers || [
              { pos: { top: '5%', left: '2%' }, mobilePos: { bottom: '35%', left: '2%' }, delay: 0.1, rot: -12, color: '#FFBEF0' },
              { pos: { bottom: '20%', left: '4%' }, mobilePos: { bottom: '20%', left: '4%' }, delay: 0.2, rot: 8, color: '#BEE3FF' },
              { pos: { top: '8%', right: '2%' }, mobilePos: { bottom: '42%', right: '2%' }, delay: 0.15, rot: 15, color: '#B4FF39' },
              { pos: { bottom: '25%', right: '5%' }, mobilePos: { bottom: '25%', right: '5%' }, delay: 0.25, rot: -5, color: '#FFD4BE' }
            ]).map((sticker, i) => {
              const currentPos = (isMobile && sticker.mobilePos) ? sticker.mobilePos : sticker.pos;
              const currentWidth = (isMobile && sticker.mobileWidth) ? sticker.mobileWidth : sticker.width;

              return (
                <motion.div
                  key={i}
                  className="sc-sticker-placeholder"
                  variants={{
                    initial: { opacity: 0, scale: 0, rotate: 0 },
                    hover: { opacity: 1, scale: 1, rotate: sticker.rot }
                  }}
                  transition={{ delay: sticker.delay, type: 'spring', stiffness: 200, damping: 15 }}
                  style={{
                    ...currentPos,
                    position: 'absolute',
                    backgroundColor: sticker.url ? 'transparent' : sticker.color,
                    background: sticker.url ? 'transparent' : undefined,
                    border: sticker.url ? 'none' : undefined,
                    boxShadow: sticker.url ? 'none' : undefined,
                    width: currentWidth || undefined,
                    height: sticker.height || (sticker.url ? 'auto' : undefined),
                    borderRadius: sticker.url ? '0px' : undefined
                  } as React.CSSProperties}
                >
                  {sticker.url ? (
                    <img src={sticker.url} alt={`Sticker ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))' }} />
                  ) : (
                    <div className="sticker-glow" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <div className="sc-content-header">
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

            {project.tags && (
              <motion.div
                className="sc-tags"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.tags.map((tag, i) => (
                  <span key={i} className="sc-tag-pill">{tag}</span>
                ))}
              </motion.div>
            )}
          </div>

          <div className="sc-assets">
            {project.assets.map((asset, i) => (
              <motion.div
                key={i}
                className={`sc-asset ${asset.type === 'note' ? 'sc-note' : 'sc-image-asset'}`}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: asset.rotate ?? 0 }}
                viewport={{ once: true }}
                variants={{
                  initial: {
                    scale: 1,
                    rotate: asset.rotate ?? 0,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 20
                    }
                  },
                  hover: {
                    scale: asset.type === 'image' ? 1.15 : 1.05,
                    rotate: asset.hoverRotate ?? asset.rotate ?? 0,
                    transition: {
                      type: 'spring',
                      stiffness: 250,
                      damping: 20,
                      delay: 0
                    }
                  }
                }}
                transition={{
                  scale: { type: 'spring', stiffness: 200, damping: 20 },
                  default: { type: 'spring', stiffness: 60, damping: 15, delay: 0.5 + i * 0.2 }
                }}
                style={{
                  '--asset-top': (isMobile ? asset.mobileTop : asset.top) || asset.top || 'auto',
                  '--asset-right': (isMobile ? asset.mobileRight : asset.right) || asset.right || 'auto',
                  '--asset-bottom': (isMobile ? asset.mobileBottom : asset.bottom) || asset.bottom || 'auto',
                  '--asset-left': (isMobile ? asset.mobileLeft : asset.left) || asset.left || 'auto',
                  '--asset-width': (isMobile ? asset.mobileWidth : asset.width) || asset.width || 'auto',
                  transformOrigin: 'bottom center'
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
    title: "Redesign Website Kreasitech",
    tagline: "Corporate Website Redesign",
    description: [
      "Revamped the digital presence to enhance brand identity and modernize user experience.",
      "Reconstructed the information architecture to ensure seamless navigation and content discovery.",
      "Designed a fully responsive, modern interface tailored for optimal lead generation.",
    ],
    tags: ["Web Design", "Corporate Identity", "UI/UX Redesign"],
    bgColor: '#f5f3ff',
    gradientColor: 'rgba(168, 85, 247, 0.35)', // Vibrant Purple
    url: 'https://drive.google.com/file/d/16LuRrzDKReoPsuqFYiOIC7W4O1b1Q4xi/view?usp=drive_link', // Placeholder link
    assets: [
      {
        url: "/Project/image 1.svg",
        type: 'image',
        bottom: '15%',
        mobileBottom: '2%',
        left: '26%',
        mobileLeft: '0%',
        rotate: 0,
        hoverRotate: -8,
        width: '13%',
        mobileWidth: '23%',
      },
      {
        url: "/Project/image 2.svg",
        type: 'image',
        bottom: '12%',
        mobileBottom: '2%',
        right: '17%',
        mobileRight: '0%',
        rotate: 0,
        hoverRotate: 5,
        width: '38%',
        mobileWidth: '72%',
      },
    ],
    stickers: [
      {
        url: "/Project/Frame 136.svg",
        pos: { top: '2%', left: '5%' },
        mobilePos: { bottom: '35%', left: '-2%' },
        delay: 0.1,
        rot: -12,
        width: '180px',
        mobileWidth: '80px'
      },
      {
        url: "/Project/Frame 69.svg",
        pos: { bottom: '15%', left: '1%' },
        mobilePos: { bottom: '7%', left: '23%' },
        delay: 0.2,
        rot: 8,
        width: '180px',
        mobileWidth: '55px'
      },
      {
        url: "/Project/Frame 72.svg",
        pos: { top: '8%', right: '1%' },
        mobilePos: { bottom: '32%', right: '2%' },
        delay: 0.15,
        rot: 15,
        width: '180px',
        mobileWidth: '80px'
      },
      {
        url: "/Project/Frame 41.svg",
        pos: { bottom: '10%', right: '1%' },
        mobilePos: { bottom: '16%', right: '4%' },
        delay: 0.25,
        rot: -5,
        width: '180px',
        mobileWidth: '60px'
      }
    ]
  },
  {
    title: "HiSales",
    tagline: "Web-based Sales Intelligence & Automation",
    description: [
      "Designed UI/UX for a Sales Intelligence platform to support sales teams and management.",
      "Created user flows, wireframes, and high-fidelity designs for dashboards and lead management.",
      "Structured navigation and visual hierarchy for data-heavy dashboards to ensure clarity.",
    ],
    tags: ["High Sales Growth", "SaaS Platform", "Data Intelligence"],
    bgColor: '#f0f9ff',
    gradientColor: 'rgba(59, 130, 246, 0.35)', // Soft Blue
    url: 'https://drive.google.com/file/d/1phfv1j-MS0JiPpMLh2s7kR6j6UtRiaJi/view?usp=drive_link', // Placeholder link
    assets: [
      {
        url: "/Project/Dashboard Admin Tenant.png",
        type: 'image',
        bottom: '10%',
        mobileBottom: '0%',
        left: '15%',
        mobileLeft: '5%',
        rotate: 0,
        width: '70%',
        mobileWidth: '90%',
      },
    ],
    stickers: [
      {
        url: "/Project/Metric item.svg",
        pos: { top: '2%', left: '5%' },
        mobilePos: { bottom: '35%', left: '2%' },
        delay: 0.1,
        rot: -12,
        width: '280px',
        mobileWidth: '120px'
      },
      {
        url: "/Project/Modal.svg",
        pos: { bottom: '15%', left: '1%' },
        mobilePos: { bottom: '5%', left: '5%' },
        delay: 0.2,
        rot: 8,
        width: '200px',
        mobileWidth: '95px'
      },
      {
        url: "/Project/Modal1.svg",
        pos: { top: '8%', right: '1%' },
        mobilePos: { bottom: '32%', right: '-2%' },
        delay: 0.15,
        rot: 15,
        width: '250px',
        mobileWidth: '130px'
      },
      {
        url: "/Project/Frame 58.svg",
        pos: { bottom: '20%', right: '1%' },
        mobilePos: { bottom: '8%', right: '4%' },
        delay: 0.25,
        rot: -5,
        width: '220px',
        mobileWidth: '100px'
      }
    ]
  },
];

export default function ProjectGrid() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    // FIX 10: section diberi min-height yang cukup (N kartu × 100vh + extra untuk scroll)
    <section
      className="projects-stacked"
      id="projects"
      ref={container}
      data-pj-render-check="v2.3"
      style={{ minHeight: `${(projects.length + 1) * 60}vh` }}
    >
      {/* ───── HEADER ───── */}
      <div className="section-inner pj-header-wrap">
        <ScrollFadeIn>
          <div className="fn-label">featured projects</div>
        </ScrollFadeIn>
        <div className="pj-main-title">
          <ScrollFadeIn>
            <div className="pj-journey-text">
              The <span className="pj-highlight">Art</span> of Design
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* ───── STACKING CARDS ───── */}
      <div className="section-inner pj-stack-container">
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
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </section>
  );
}