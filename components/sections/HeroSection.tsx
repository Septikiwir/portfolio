'use client';

import React from 'react';
import Image from 'next/image';

interface ToolFeature {
    name: string;
    bgClass: string;
    shapeClass: string;
    iconPath: string;
}

const tools: ToolFeature[] = [
    {
        name: "Figma",
        bgClass: "bg-accent-purple",
        shapeClass: "rounded-full",
        iconPath: "/figma.svg",
    },
    {
        name: "Adobe XD",
        bgClass: "bg-primary-green",
        shapeClass: "rounded-[50px]",
        iconPath: "/adobe xd.svg",
    },
    {
        name: "Framer",
        bgClass: "bg-accent-orange",
        shapeClass: "rounded-t-full rounded-b-[50px]",
        iconPath: "/framer.svg",
    },
    {
        name: "Webflow",
        bgClass: "bg-accent-yellow",
        shapeClass: "rounded-[50px]",
        iconPath: "/webflow.svg",
    },
    {
        name: "WordPress",
        bgClass: "bg-accent-blue",
        shapeClass: "rounded-full",
        iconPath: "/WordPress Logo.svg",
    },
];

export default function HeroSection() {
    const [currentTools, setCurrentTools] = React.useState(tools);
    const [isVisible, setIsVisible] = React.useState(true);
    const [delays, setDelays] = React.useState<number[]>(new Array(tools.length).fill(0));

    React.useEffect(() => {
        let isRunning = true;

        const animateSequence = async () => {
            if (!isRunning) return;

            const sequence = [0, 1, 4, 2, 3];
            const exitDelays = currentTools.map((_, i) => sequence[i] * 80);
            setDelays(exitDelays);

            await new Promise(r => setTimeout(r, 50));
            if (!isRunning) return;

            setIsVisible(false);

            await new Promise(r => setTimeout(r, 280));
            if (!isRunning) return;

            setCurrentTools(prev => [...prev].sort(() => Math.random() - 0.5));

            const enterDelays = currentTools.map((_, i) => sequence[i] * 80);
            setDelays(enterDelays);

            await new Promise(r => setTimeout(r, 50));
            if (!isRunning) return;

            setIsVisible(true);

            await new Promise(r => setTimeout(r, 2000));
            if (isRunning) animateSequence();
        };

        animateSequence();

        return () => { isRunning = false; };
    }, []);

    return (
        <section id="hero" className="section-container pt-40 pb-12">
            {/* Hero Content */}
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
                <div className="relative mb-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] text-glow mb-6 uppercase">
                        CRAFTING DELIGHTFUL
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            USER EXPERIENCES
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                        Senior UI/UX Designer & Product Strategist focused on building
                        user-centric, high-fidelity interfaces and seamless digital
                        ecosystems.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="bg-primary-green text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(109,40,217,0.2)] flex items-center gap-2 group"
                        >
                            View My Work
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="border border-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Tools Showcase */}
            <div className="w-full overflow-hidden">
                <div className="relative w-full overflow-hidden lg:pt-4">
                    <div className="grid grid-cols-2 md:flex md:items-end md:justify-center w-full gap-4 lg:gap-8 max-w-full">
                        {currentTools.map((tool, index) => (
                            <div
                                key={tool.name}
                                className={`
                                    relative ${index === 4 ? 'hidden md:flex' : 'flex'} items-center justify-center w-full md:flex-1
                                    aspect-square
                                    ${tool.bgClass}
                                    ${tool.shapeClass}
                                    transform transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]
                                    will-change-transform
                                    ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                                `}
                                style={{ transitionDelay: `${delays[index]}ms` }}
                            >
                                <div className="relative z-10 flex items-center justify-center w-3/5 h-3/5">
                                    <Image
                                        src={tool.iconPath}
                                        alt={tool.name}
                                        fill
                                        className="object-contain brightness-0 invert-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
