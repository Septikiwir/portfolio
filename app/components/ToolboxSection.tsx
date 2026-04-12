"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph =
  "Informatics graduate from Universitas AMIKOM Yogyakarta with a strong focus on UI/UX Design and a proven strong portfolio. Experienced in user research, wireframing, prototyping, and usability testing to create intuitive and user-centered designs. Strong in problem-solving, translating complex ideas into clear design solutions, and collaborating effectively with cross-functional teams. Passionate about creating user-centered products that are both functional and visually engaging.";

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: import("framer-motion").MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span className="about-word" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

export default function ToolboxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "start -0.1"],
  });

  const words = paragraph.split(" ");

  return (
    <section className="about-section" id="about" ref={containerRef}>
      <div className="section-inner about-inner">
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
        </div>
        <div className="about-right">
          <p className="about-paragraph">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
