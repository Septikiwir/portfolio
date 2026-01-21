
interface Feature {
    title: string;
    description: string;
    icon: string;
    color: "purple" | "green" | "orange" | "yellow" | "blue";
    progress: number;
    bgConfig: {
        bgClass: string;
        textClass: string;
        iconBgClass: string;
        glowClass: string;
    };
}

const features: Feature[] = [
    {
        title: "User Research",
        description: "Deep-dive insights to understand user needs and behaviors.",
        icon: "psychology",
        color: "purple",
        progress: 90,
        bgConfig: {
            bgClass: "bg-accent-purple",
            textClass: "text-accent-purple",
            iconBgClass: "bg-accent-purple/20",
            glowClass: "bg-accent-purple/10 group-hover:bg-accent-purple/20",
        },
    },
    {
        title: "Visual Design",
        description: "Crafting pixel-perfect aesthetics with striking typography.",
        icon: "palette",
        color: "green",
        progress: 95,
        bgConfig: {
            bgClass: "bg-primary-green",
            textClass: "text-primary-green",
            iconBgClass: "bg-primary-green-dim",
            glowClass: "bg-primary-green/10 group-hover:bg-primary-green/20",
        },
    },
    {
        title: "Interaction Design",
        description: "Creating fluid, meaningful responses to user inputs.",
        icon: "touch_app",
        color: "orange",
        progress: 85,
        bgConfig: {
            bgClass: "bg-accent-orange",
            textClass: "text-accent-orange",
            iconBgClass: "bg-accent-orange/20",
            glowClass: "bg-accent-orange/10 group-hover:bg-accent-orange/20",
        },
    },
    {
        title: "Prototyping",
        description: "Rapidly validating ideas through interactive mockups.",
        icon: "devices",
        color: "yellow",
        progress: 80,
        bgConfig: {
            bgClass: "bg-accent-yellow",
            textClass: "text-accent-yellow",
            iconBgClass: "bg-accent-yellow/20",
            glowClass: "bg-accent-yellow/10 group-hover:bg-accent-yellow/20",
        },
    },
    {
        title: "Design Systems",
        description: "Scalable component libraries for consistent experiences.",
        icon: "category",
        color: "blue",
        progress: 90,
        bgConfig: {
            bgClass: "bg-accent-blue",
            textClass: "text-accent-blue",
            iconBgClass: "bg-accent-blue/20",
            glowClass: "bg-accent-blue/10 group-hover:bg-accent-blue/20",
        },
    },
];

export default function Features() {
    return (
        <div className="w-full mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`feature-card ${feature.color} rounded-3xl p-8 flex flex-col items-start gap-4 h-full relative overflow-hidden group`}
                    >
                        <div
                            className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-colors ${feature.bgConfig.glowClass}`}
                        ></div>
                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${feature.bgConfig.iconBgClass} ${feature.bgConfig.textClass}`}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {feature.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <p className="text-sm text-gray-400 text-left">
                            {feature.description}
                        </p>
                        <div className="mt-auto pt-4 flex gap-2 w-full">
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${feature.bgConfig.bgClass}`}
                                    style={{ width: `${feature.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
