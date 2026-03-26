'use client';

import React, { useState, useEffect, useRef } from 'react';

const storyData = [
    {
        id: 1,
        title: "The Beginning",
        subtitle: "Stage 1: Curiosity & First Pixels",
        description: "It all started with a simple question: 'How do they make websites look so good?' My journey began in a small room with a borrowed laptop, exploring the magic of colors and typography.",
        icon: "lightbulb",
        accent: "text-primary-green",
        bg: "bg-primary-green/10",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "The Growth",
        subtitle: "Stage 2: Mastering the Craft",
        description: "Consistency over intensity. I spent years diving deep into user psychology and design systems. Every project was a lesson in balancing beauty with functionality.",
        icon: "trending_up",
        accent: "text-accent-blue",
        bg: "bg-accent-blue/10",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "The Present",
        subtitle: "Stage 3: Impact & Innovation",
        description: "Now, I focus on creating digital experiences that solve real-world problems. My goal is always the same: make it intuitive, accessible, and unforgettable.",
        icon: "rocket_launch",
        accent: "text-accent-purple",
        bg: "bg-accent-purple/10",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    }
];

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="about" className="relative min-h-screen bg-surface-dark transition-colors duration-1000">
            {/* Dynamic Background Tint */}
            <div 
                className={`absolute inset-0 transition-opacity duration-1000 ${storyData[activeIndex].bg} opacity-20`} 
                style={{ mixBlendMode: 'overlay' }}
            />
            
            <div className="section-container relative z-10 py-32">
                <div className="text-center mb-24">
                    <h2 className="section-heading">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subheading mx-auto max-w-2xl text-gray-400">
                        Setiap desain memiliki narasi. Di sini adalah rangkuman perjalanan kreatif saya 
                        dari awal hingga sekarang.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* COLUMN 1: Left Text (Odd indices 0, 2) */}
                    <div className="hidden lg:flex flex-col space-y-[15vh] pb-24">
                        {storyData.map((story, index) => (
                            <div
                                key={`left-${story.id}`}
                                data-index={index}
                                ref={(el) => { if (index % 2 === 0) sectionRefs.current[index] = el; }}
                                className={`
                                    min-h-[40vh] transition-all duration-700
                                    ${index % 2 === 0 
                                        ? (activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-10 -translate-x-12')
                                        : 'opacity-0 pointer-events-none'
                                    }
                                `}
                            >
                                {index % 2 === 0 && (
                                    <div className="space-y-6 text-right pr-4 border-r border-white/5">
                                        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">
                                            Chapter {index + 1}
                                        </span>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed italic">
                                            {story.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* COLUMN 2: Middle Sticky Visuals */}
                    <div className="sticky top-32 h-fit">
                        <div className="relative aspect-square w-full max-w-sm mx-auto">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {storyData.map((story, index) => (
                                    <div
                                        key={story.id}
                                        className={`
                                            absolute inset-0 
                                            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                                            bg-white p-3 sm:p-4 shadow-2xl rounded-sm
                                            ${activeIndex === index 
                                                ? 'z-30 opacity-100 translate-y-0 rotate-0 scale-100' 
                                                : activeIndex > index 
                                                    ? 'z-10 opacity-0 -translate-y-20 -rotate-12 scale-90' 
                                                    : `z-20 opacity-40 scale-95`}
                                        `}
                                        style={{
                                            transform: activeIndex === index 
                                                ? 'translateY(0) rotate(0deg) scale(1)' 
                                                : activeIndex > index 
                                                    ? 'translateY(-80px) rotate(-12deg) scale(0.9)'
                                                    : `translateY(${(index - activeIndex) * 20}px) rotate(${(index - activeIndex) * 5}deg) scale(${1 - (index - activeIndex) * 0.05})`
                                        }}
                                    >
                                        <div className="w-full h-[85%] bg-gray-100 overflow-hidden relative">
                                            <img 
                                                src={story.image} 
                                                alt={story.title}
                                                className="w-full h-full object-cover transition-transform duration-[2000ms]"
                                                style={{ transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)' }}
                                            />
                                        </div>
                                        <div className="mt-4 text-center font-serif italic text-gray-400 text-xs">
                                            &quot;{story.title.toLowerCase()} was a fav &lt;3&quot;
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Mobile Chapter Label */}
                        <div className="lg:hidden mt-12 text-center px-6">
                            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">
                                Chapter {activeIndex + 1}
                            </span>
                            <p className="mt-4 text-sm text-gray-400 leading-relaxed italic">
                                {storyData[activeIndex].description}
                            </p>
                        </div>
                    </div>

                    {/* COLUMN 3: Right Text (Even indices 1) */}
                    <div className="hidden lg:flex flex-col space-y-[15vh] pt-0 pb-24">
                        {storyData.map((story, index) => (
                            <div
                                key={`right-${story.id}`}
                                data-index={index}
                                ref={(el) => { if (index % 2 !== 0) sectionRefs.current[index] = el; }}
                                className={`
                                    min-h-[40vh] transition-all duration-700
                                    ${index % 2 !== 0 
                                        ? (activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-10 translate-x-12')
                                        : 'opacity-0 pointer-events-none'
                                    }
                                `}
                            >
                                {index % 2 !== 0 && (
                                    <div className="space-y-6 text-left pl-4 border-l border-white/5">
                                        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">
                                            Chapter {index + 1}
                                        </span>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed italic">
                                            {story.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
