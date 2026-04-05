import { ChevronDown } from "lucide-react";

import type { NavLink } from "@/content/home";

export function HeaderNav({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      {/* Mobile-first header spacing: tighter on small screens, scales up via sm/md */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 font-[var(--font-manrope)] sm:gap-4 sm:px-6 sm:py-6 md:px-8 lg:px-12">
        <div className="text-display min-w-0 text-xl italic text-white">Mue.</div>
        <nav className="hidden items-center gap-10 text-[15px] text-white/70 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 hover:text-white"
            >
              {item.label}
              {item.hasDropdown ? (
                <ChevronDown className="h-4 w-4 opacity-70" />
              ) : null}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-sm bg-white px-6 py-2 text-[15px] font-semibold text-black transition-transform hover:scale-[1.02]">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}
