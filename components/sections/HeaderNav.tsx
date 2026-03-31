import { ChevronDown } from "lucide-react";

import type { NavLink } from "@/content/home";

export function HeaderNav({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <div className="container-main flex items-center justify-between py-6 font-[var(--font-manrope)]">
        <div className="text-display text-xl italic text-white">Mue.</div>
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
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
}
