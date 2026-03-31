import FlipCard from "@/components/shared/FlipCard";
import { RotatingFontPill } from "@/components/shared/RotatingFontPill";

export function HeroSection() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden pb-24 pt-28 text-white">
      <img
        src="https://images.pexels.com/photos/5853347/pexels-photo-5853347.png?auto=compress&cs=tinysrgb&w=1920"
        alt="Serene dark ocean waves"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#070612]/70 mix-blend-multiply" />
      <div className="container-main relative">
        <div className="flex items-center gap-6 pb-12 text-xs uppercase tracking-[0.35em] text-white/70">
          <span>001</span>
          <span className="h-px flex-1 bg-white/25" />
          <span className="tracking-[0.2em] text-white/70">//Digital Agency</span>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-[1.35fr_0.65fr] lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="fade-up font-[var(--font-manrope)] text-[clamp(3rem,6.6vw,5.75rem)] font-light leading-[0.96] tracking-[-0.04em] text-white">
              <span className="whitespace-nowrap">Hi! I&apos;m</span>{" "}
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/90 px-[0.55em] py-[0.18em] align-middle text-[0.56em] font-normal tracking-[-0.02em] text-black/85">
                Pramudya
              </span>
              <br />
              <span className="mr-[0.15em]">a</span>
              <RotatingFontPill
                text="UI/UX Designer"
                intervalMs={1000}
                className="mx-[0.18em] inline-flex items-center rounded-full bg-black/80 px-[0.6em] py-[0.2em] align-middle text-[0.56em] font-normal tracking-[-0.02em] text-white"
              />
              <br />
              <span className="">from </span>
              <span className="inline-flex items-center rounded-full border border-white/30 bg-transparent px-[0.6em] py-[0.2em] align-middle text-[0.56em] font-normal tracking-[-0.02em] text-white">
                Yogyakarta
              </span>
            </h1>
          </div>
          <div className="flex justify-center md:justify-end lg:justify-end">
            <div className="fade-up fade-up-delay-1 origin-center scale-[0.7] md:scale-[0.7] lg:scale-100">
              <FlipCard
                style={{
                  width: "clamp(11.2rem, 15.4vw, 14rem)",
                  aspectRatio: "3/4",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-1 left-0 h-28 w-56 bg-[var(--section-bg)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="absolute -bottom-1 left-0 right-0 h-16 bg-[var(--section-bg)]"
        style={{
          clipPath: "polygon(0 35%, 100% 12%, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}
