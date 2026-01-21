'use client';

import React from 'react';
import Image from 'next/image';

interface ToolFeature {
    name: string;
    bgClass: string;
    shapeClass: string;
    iconPath: string;
}

const features: ToolFeature[] = [
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

export default function Features() {
    const [currentFeatures, setCurrentFeatures] = React.useState(features);
    const [isVisible, setIsVisible] = React.useState(true);
    // Store random delays for each item to create "organic" simultaneous feel
    const [delays, setDelays] = React.useState<number[]>(new Array(features.length).fill(0));

    React.useEffect(() => {
        let isRunning = true;

        const animateSequence = async () => {
            if (!isRunning) return;

            // Phase 1: Prepare for Exit (Fixed Sequence 1-2-4-5-3)
            // Order: Item 1 (0), Item 2 (1), Item 4 (2), Item 5 (3), Item 3 (4) delay factor
            // Indices: 0->0, 1->1, 2->4, 3->2, 4->3
            const sequence = [0, 1, 4, 2, 3];
            const exitDelays = currentFeatures.map((_, i) => sequence[i] * 80);
            setDelays(exitDelays);

            // Give React a frame to apply delays before triggering transition
            await new Promise(r => setTimeout(r, 50));
            if (!isRunning) return;

            setIsVisible(false);

            // Phase 2: Wait for Exit (Duration + Max Delay)
            // Max delay is 4 * 80 = 320ms. Transition is 150ms. Total 470ms.
            // User requested 280ms (Aggressive overlap).
            await new Promise(r => setTimeout(r, 280));
            if (!isRunning) return;

            // Phase 3: Shuffle
            setCurrentFeatures(prev => [...prev].sort(() => Math.random() - 0.5));

            // Phase 4: Prepare for Enter (Same Sequence)
            const enterDelays = currentFeatures.map((_, i) => sequence[i] * 80);
            setDelays(enterDelays);

            // Give React a frame
            await new Promise(r => setTimeout(r, 50));
            if (!isRunning) return;

            setIsVisible(true);

            // Phase 5: Display Time
            // Faster display for faster overall feel
            await new Promise(r => setTimeout(r, 2000));
            if (isRunning) animateSequence();
        };

        // Start loop
        animateSequence();

        return () => { isRunning = false; };
    }, []); // Empty dependency array as we use function scope for recursion

    return (
        <div className="w-full overflow-hidden">
            <div className="relative w-full overflow-hidden lg:pt-4">
                {/* Full width container with responsive grid/flex layout */}
                <div className="grid grid-cols-2 md:flex md:items-end md:justify-center w-full gap-4 lg:gap-8 max-w-full">
                    {currentFeatures.map((feature, index) => (
                        <div
                            key={feature.name}
                            className={`
                relative ${index === 4 ? 'hidden md:flex' : 'flex'} items-center justify-center w-full md:flex-1
                aspect-square
                ${feature.bgClass}
                ${feature.shapeClass}
                transform transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]
                will-change-transform
                ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `}
                            style={{ transitionDelay: `${delays[index]}ms` }}
                        >
                            <div className="relative z-10 flex items-center justify-center w-3/5 h-3/5">
                                <Image
                                    src={feature.iconPath}
                                    alt={feature.name}
                                    fill
                                    className="object-contain brightness-0 invert-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
