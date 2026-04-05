import FlipCard from "@/components/shared/FlipCard";
import { RotatingFontPill } from "@/components/shared/RotatingFontPill";

export function HeroSection() {
  return (
    <section className="relative min-h-svh overflow-hidden pb-32 pt-20 text-white sm:min-h-[88vh] sm:pb-36 sm:pt-24 md:min-h-[82vh] md:pb-28 md:pt-28">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/5853347/pexels-photo-5853347.png?auto=compress&cs=tinysrgb&w=1920"
        alt="Serene dark ocean waves"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#070612]/70 mix-blend-multiply" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">

        {/* Eyebrow nav row */}
        <div className="flex flex-wrap items-center gap-3 pb-24 text-[10px] uppercase tracking-[0.35em] text-white/60 sm:gap-5 sm:pb-10 sm:text-xs sm:tracking-[0.35em] md:pb-12">
          <span>001</span>
          <span className="h-px flex-1 bg-white/20" />
          <span className="tracking-[0.2em] text-white/60">{"// Digital Agency"}</span>
        </div>

        {/*
          Mobile  : stack vertically — card on top, text below
          md+     : side-by-side — text left, card right
        */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">

          {/* ── Card ── shown first on mobile so it anchors the hero visually */}
          <div className="fade-up fade-up-delay-1 order-first flex justify-center md:order-last md:flex-1 md:justify-end">
            <FlipCard
              style={{
                /* Fluid size: from 160 px on small phones to 224 px on desktop */
                width: "clamp(10rem, 38vw, 14rem)",
                aspectRatio: "3/4",
              }}
            />
          </div>

          {/* ── Headline ── */}
          <div className="order-last space-y-6 text-center md:order-first md:flex-[1.35] md:text-left">
            <h1
              className="
                fade-up
                max-w-full break-words
                font-[var(--font-manrope)]
                font-light leading-[0.96] tracking-[-0.04em]
                text-white
                /* Mobile-first fluid scale */
                text-[clamp(2.6rem,11vw,3.4rem)]
                /* Tablet */
                sm:text-[clamp(3rem,8vw,4.5rem)]
                /* Desktop */
                md:text-[clamp(3.4rem,5.8vw,5.75rem)]
              "
            >
              {/* Line 1 */}
              <span className="whitespace-nowrap">Hi! I&apos;m</span>{" "}
              <span
                className="
                  inline-flex items-center rounded-full
                  border border-white/15 bg-white/90
                  px-[0.5em] py-[0.16em]
                  align-middle
                  text-[0.54em] font-normal tracking-[-0.02em] text-black/85
                "
              >
                Pramudya
              </span>

              <br />

              {/* Line 2 */}
              <span className="mr-[0.12em]">a</span>
              <RotatingFontPill
                text="UI/UX Designer"
                intervalMs={1000}
                className="
                  mx-[0.16em]
                  inline-flex items-center rounded-full
                  bg-black/80
                  px-[0.55em] py-[0.18em]
                  align-middle
                  text-[0.54em] font-normal tracking-[-0.02em] text-white
                "
              />

              <br />

              {/* Line 3 */}
              <span>from </span>
              <span
                className="
                  inline-flex items-center rounded-full
                  border border-white/30 bg-transparent
                  px-[0.55em] py-[0.18em]
                  align-middle
                  text-[0.54em] font-normal tracking-[-0.02em] text-white
                "
              >
                Ketapang
              </span>
            </h1>

            {/* Optional sub-copy — hidden on very small screens to keep it tight */}
            {/* <p className="hidden text-sm text-white/50 sm:block">
              Crafting digital experiences that feel human.
            </p> */}
          </div>
        </div>
      </div>

      {/* Decorative bottom shapes */}
      <div
        className="absolute -bottom-1 left-0 h-20 w-40 bg-[var(--section-bg)] sm:h-24 sm:w-48 md:h-28 md:w-56"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="absolute -bottom-1 left-0 right-0 h-12 bg-[var(--section-bg)] sm:h-14 md:h-16"
        style={{ clipPath: "polygon(0 38%, 100% 14%, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}