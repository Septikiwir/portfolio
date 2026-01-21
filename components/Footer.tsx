import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-white/5 mt-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2024 UI/UX Portfolio. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link
                        href="#"
                        className="hover:text-primary-green transition-colors"
                    >
                        Twitter
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary-green transition-colors"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary-green transition-colors"
                    >
                        Dribbble
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary-green transition-colors"
                    >
                        Behance
                    </Link>
                </div>
            </div>
        </footer>
    );
}
