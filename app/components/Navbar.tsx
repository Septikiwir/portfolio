"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <Link href="#" className="nav-logo">
        Pramudya<span>.</span>
      </Link>
      <div className="nav-links">
        <Link href="#projects">Projects</Link>
        <Link href="#about">About me</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#contact" className="nav-btn">
          Hire me →
        </Link>
      </div>
    </nav>
  );
}
