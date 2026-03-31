'use client';

import React from 'react';

interface Project {
    label: string;
    statement: string;
    boldWord: string;
    tags: string[];
    accentColor: string;
    accentBg: string;
    icon: string;
}

const projects: Project[] = [
    {
        label: "CASE STUDY",
        statement: "Built a scalable dashboard system that cut analytics load time by",
        boldWord: "60%",
        tags: ["UI Design", "Dashboard", "Figma"],
        accentColor: "#6D28D9",
        accentBg: "bg-primary-green",
        icon: "monitoring",
    },
    {
        label: "CASE STUDY",
        statement: "Redesigned the patient portal improving user satisfaction scores by",
        boldWord: "45%",
        tags: ["UX Research", "Mobile", "Prototype"],
        accentColor: "#3B82F6",
        accentBg: "bg-accent-blue",
        icon: "health_and_safety",
    },
    {
        label: "CASE STUDY",
        statement: "Crafted an eco-commerce experience that boosted conversion rate by",
        boldWord: "35%",
        tags: ["E-Commerce", "Web Design", "Webflow"],
        accentColor: "#F97316",
        accentBg: "bg-accent-orange",
        icon: "eco",
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative cursor-pointer" style={{ height: '480px' }}>

            {/* ══════ LAYER 1: Back card (offset right & behind) ══════ */}
            <div
                className="
                    absolute inset-0 rounded-2xl overflow-hidden
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    bg-[#1a1a1f] border border-white/[0.06]
                    opacity-0 group-hover:opacity-100
                    scale-[0.98] group-hover:scale-100
                    translate-x-0 translate-y-0 rotate-0
                    group-hover:translate-x-8 group-hover:translate-y-2
                    group-hover:rotate-[2deg]
                "
                style={{
                    zIndex: 1,
                }}
            >
                {/* Back card subtle content hint */}
                <div className="p-6 pt-8 opacity-40">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3">Case Study</div>
                    <div className="space-y-2">
                        <div className="h-3 w-3/4 rounded bg-white/10" />
                        <div className="h-3 w-1/2 rounded bg-white/10" />
                        <div className="h-3 w-2/3 rounded bg-white/10" />
                    </div>
                </div>
            </div>

            {/* ══════ LAYER 2: Side panel — "CLICK TO READ" ══════ */}
            <div
                className={`
                    absolute rounded-r-2xl rounded-l-sm overflow-hidden
                    ${project.accentBg}
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    opacity-0 group-hover:opacity-100
                    translate-x-0
                    group-hover:translate-x-[36px]
                    shadow-xl
                `}
                style={{
                    top: '24px',
                    right: '12px',
                    width: '48px',
                    height: '280px',
                    zIndex: 2,
                    writingMode: 'vertical-rl' as const,
                }}
            >
                {/* Circular dot at top */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white/30 border border-white/20" />

                {/* Label */}
                <div className="flex items-center justify-center h-full">
                    <span className="text-[11px] font-bold text-white tracking-[0.25em] uppercase select-none">
                        Click to read
                    </span>
                </div>
            </div>

            {/* ══════ LAYER 3: Main card (front) ══════ */}
            <div
                className="
                    absolute rounded-2xl overflow-hidden
                    bg-[#f5f0eb]
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    group-hover:-translate-y-1 group-hover:-translate-x-1
                    group-hover:shadow-2xl
                "
                style={{
                    inset: 0,
                    zIndex: 3,
                    boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
                }}
            >
                {/* Main card content */}
                <div className="p-7 md:p-8 h-full flex flex-col justify-between relative">

                    {/* Label */}
                    <div className="flex items-center gap-2 mb-4">
                        <span
                            className="material-symbols-outlined text-sm"
                            style={{ color: project.accentColor }}
                        >
                            {project.icon}
                        </span>
                        <span
                            className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                            style={{ color: project.accentColor }}
                        >
                            {project.label}
                        </span>
                    </div>

                    {/* Big statement */}
                    <div className="flex-1 flex items-center">
                        <h3
                            className="text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] tracking-tight"
                            style={{ color: '#1a1a1f' }}
                        >
                            {project.statement}{' '}
                            <span style={{ color: project.accentColor }}>
                                {project.boldWord}
                            </span>
                            <span style={{ color: '#1a1a1f' }}>.</span>
                        </h3>
                    </div>

                    {/* Decorative floating mini-cards (mimicking the reference images) */}
                    <div className="absolute top-24 right-8 w-20 h-14 rounded-lg bg-white shadow-md border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-2 z-10 scale-95 group-hover:scale-100">
                        <div className="space-y-1 px-2 w-full">
                            <div className="h-1.5 w-full rounded" style={{ background: project.accentColor, opacity: 0.4 }} />
                            <div className="h-1 w-3/4 rounded bg-gray-200" />
                            <div className="h-1 w-1/2 rounded bg-gray-200" />
                        </div>
                    </div>
                    <div className="absolute bottom-28 right-12 w-16 h-20 rounded-lg bg-white shadow-md border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-2 group-hover:-rotate-3 z-10 scale-95 group-hover:scale-100">
                        <div className="space-y-1 px-2 w-full">
                            <div className="h-6 w-full rounded" style={{ background: project.accentColor, opacity: 0.15 }} />
                            <div className="h-1 w-full rounded bg-gray-200" />
                            <div className="h-1 w-2/3 rounded bg-gray-200" />
                        </div>
                    </div>

                    {/* Tags at bottom */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] px-3 py-1.5 rounded-full font-medium border"
                                style={{
                                    color: project.accentColor,
                                    borderColor: `${project.accentColor}30`,
                                    backgroundColor: `${project.accentColor}08`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-container">
            {/* The previous section heading was removed as the new FeaturedProjectsBanner replaces it */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 px-2 max-w-[1400px] mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-16">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link"
                >
                    <span className="text-sm font-medium">View All Projects</span>
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </a>
            </div>
        </section>
    );
}
