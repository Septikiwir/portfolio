'use client';

import React, { useState } from 'react';

interface Experience {
    company: string;
    role: string;
    date: string;
    type: string;
    description: string;
    accentColor: string;
    accentBg: string;
    icon: string;
}

const experiences: Experience[] = [
    {
        company: "TechNova Solutions",
        role: "Senior UI/UX Designer",
        date: "Jan 2022 - Present",
        type: "Full-time",
        description: "Led the design of a comprehensive dashboard system used by top executives, reducing data retrieval time by 60% through optimized user flows and intuitive data visualization.",
        accentColor: "#6D28D9",
        accentBg: "bg-primary-green",
        icon: "work",
    },
    {
        company: "Creative Studio",
        role: "UX Researcher",
        date: "Mar 2020 - Dec 2021",
        type: "Contract",
        description: "Conducted extensive user research to inform the redesign of a critical patient portal, resulting in a 45% increase in overall user satisfaction and significantly fewer support tickets.",
        accentColor: "#3B82F6",
        accentBg: "bg-accent-blue",
        icon: "design_services",
    },
    {
        company: "Digital Agency",
        role: "Web Designer",
        date: "Jun 2018 - Feb 2020",
        type: "Full-time",
        description: "Spearheaded the UI/UX design for a sustainable e-commerce platform, focusing on seamless checkout processes and eco-friendly product discovery, boosting conversions by 35%.",
        accentColor: "#F97316",
        accentBg: "bg-accent-orange",
        icon: "laptop_mac",
    },
];

function ExperienceCard({ experience }: { experience: Experience }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="group relative cursor-pointer" 
            style={{ perspective: '1500px' }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* ══════ LAYER 1: Back card (shadow/offset behind) ══════ */}
            <div
                className={`
                    absolute inset-0 rounded-2xl overflow-hidden border
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isFlipped ? 'bg-[#f5f0eb] border-black/[0.06]' : 'bg-[#1a1a1f] border-white/[0.06]'}
                    opacity-0 group-hover:opacity-100
                    scale-[0.98] group-hover:scale-100
                    translate-x-0 translate-y-0 rotate-0
                    ${isFlipped 
                        ? 'group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[0.5deg]' 
                        : 'group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-[0.5deg]'}
                `}
                style={{ zIndex: 1 }}
            />

            {/* ══════ LAYER 2: Side panel — "Flip Me" / "Reflip" ══════ */}
            <div
                className={`
                    absolute overflow-hidden
                    ${experience.accentBg}
                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    opacity-0 group-hover:opacity-100
                    shadow-xl
                    ${isFlipped 
                        ? 'rounded-l-2xl rounded-r-sm group-hover:-translate-x-[36px]' 
                        : 'rounded-r-2xl rounded-l-sm group-hover:translate-x-[36px]'}
                `}
                style={{
                    top: '16px',
                    bottom: '16px',
                    width: '48px',
                    zIndex: 2,
                    left: isFlipped ? '12px' : 'calc(100% - 60px)',
                    transform: 'translateX(0)',
                }}
            >
                {/* Circular dot at top */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white/30 border border-white/20" />

                {/* Label */}
                <div 
                    className={`flex justify-center w-full h-full px-2.5 ${isFlipped ? 'items-end' : 'items-start'}`} 
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <span 
                        className="text-[11px] font-bold text-white tracking-[0.25em] uppercase select-none transition-transform duration-700"
                        style={{ transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        {isFlipped ? 'Reflip' : 'Flip Me'}
                    </span>
                </div>
            </div>

            {/* ══════ HOVER TRANSLATOR ══════ */}
            <div
                className={`relative w-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isFlipped ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : 'group-hover:-translate-y-1 group-hover:-translate-x-1'
                }`}
                style={{ zIndex: 3 }}
            >
                {/* ══════ FLIPPER CONTAINER ══════ */}
                <div
                    className="relative w-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
                    }}
                >
                    {/* ══════ LAYER 3: Main card (front) ══════ */}
                    <div
                        className="
                            relative w-full rounded-2xl overflow-hidden
                            bg-[#f5f0eb]
                            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                            group-hover:shadow-2xl
                            p-6 md:p-8
                        "
                        style={{
                            boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            
                            {/* ── Left side: Logo and Info ── */}
                            <div className="flex items-center gap-5 md:gap-6">
                                {/* Logo Circle */}
                                <div 
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-shrink-0 items-center justify-center bg-white border shadow-sm transition-transform duration-500 group-hover:scale-110"
                                    style={{ borderColor: `${experience.accentColor}30` }}
                                >
                                    <span 
                                        className="material-symbols-outlined text-[28px] md:text-[32px]"
                                        style={{ color: experience.accentColor }}
                                    >
                                        {experience.icon}
                                    </span>
                                </div>
                                
                                {/* Title & Subtitle */}
                                <div>
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.15] tracking-tight mb-2" style={{ color: '#1a1a1f' }}>
                                        {experience.company}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-[14px] md:text-[15px] font-medium tracking-tight">
                                        <span className="material-symbols-outlined text-[16px] md:text-[18px]">work</span>
                                        <span>{experience.role}</span>
                                    </div>
                                </div>
                            </div>

                            {/* ── Right side: Date and Pill ── */}
                            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-gray-100">
                                <div className="text-gray-400 text-[14px] md:text-[15px] font-medium tracking-tight mb-0 md:mb-3">
                                    {experience.date}
                                </div>
                                <span
                                    className="text-[11px] px-3 py-1.5 rounded-full font-medium border transition-all duration-300 group-hover:scale-105"
                                    style={{
                                        color: experience.accentColor,
                                        borderColor: `${experience.accentColor}30`,
                                        backgroundColor: `${experience.accentColor}08`,
                                    }}
                                >
                                    {experience.type}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ══════ BACK CARD ══════ */}
                    <div
                        className="
                            absolute inset-0 rounded-2xl overflow-hidden
                            bg-[#1a1a1f] text-white
                            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                            group-hover:shadow-2xl
                            p-6 md:p-8 flex flex-col justify-center
                        "
                        style={{
                            boxShadow: '0 4px 30px rgba(0,0,0,0.6)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateX(180deg)',
                        }}
                    >
                        <h4 className="text-[18px] md:text-[22px] font-bold tracking-tight mb-3 flex items-center gap-2" style={{ color: experience.accentColor }}>
                            <span className="material-symbols-outlined text-[20px] md:text-[24px]">info</span>
                            Impact & Description
                        </h4>
                        <p className="text-gray-300 text-[14px] md:text-[16px] leading-relaxed">
                            {experience.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="section-container">
            <div className="text-center mb-16">
                <h2 className="section-heading">
                    My <span className="gradient-text">Experiences</span>
                </h2>
                <p className="section-subheading mx-auto">
                    Here are some of my professional experiences and the impact I&apos;ve made.
                </p>
            </div>

            <div className="flex flex-col gap-5 md:gap-6 px-4 max-w-[900px] mx-auto">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </section>
    );
}
