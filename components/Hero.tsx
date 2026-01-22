export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
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
                        href="#"
                        className="bg-primary-green text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(109,40,217,0.2)] flex items-center gap-2 group"
                    >
                        View My Work
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
