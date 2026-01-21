import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-8 left-0 w-full z-50 flex justify-center px-4">
            <nav className="glass-nav rounded-full px-2 py-2 flex items-center justify-between gap-8 max-w-4xl w-full">
                <div className="pl-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-green text-sm">
                            bolt
                        </span>
                    </div>
                    <span className="font-bold tracking-tight text-white">
                        NVG8<span className="text-primary-green">.io</span>
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-1">
                    <Link
                        href="#"
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#"
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#"
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                    >
                        Contact
                    </Link>
                </div>
                <Link
                    href="#"
                    className="bg-primary-green text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-white transition-colors hover:shadow-neon"
                >
                    Hire Me
                </Link>
            </nav>
        </div>
    );
}
