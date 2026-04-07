import ScrollFadeIn from "./ScrollFadeIn";
import RotatingFontPill from "./RotatingFontPill";
import FlipCard from "./FlipCard";

export default function HeroSection() {
  return (
    <section className="hero">
      <svg
        className="hero-bg-lines"
        viewBox="0 0 1400 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 500 Q300 200 700 400 Q1100 600 1500 300"
          stroke="#e0e0e0"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 400 Q400 100 800 350 Q1200 600 1600 200"
          stroke="#e8e8e8"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 600 Q200 300 600 450 Q1000 600 1400 350"
          stroke="#ebebeb"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="900" cy="180" r="180" stroke="#e8e8e8" strokeWidth="1" fill="none" />
        <circle cx="900" cy="180" r="130" stroke="#eeeeee" strokeWidth="1" fill="none" />
      </svg>
      <div className="hero-inner">
        <div className="hero-content min-[901px]:w-[calc(80%-30px)] min-[901px]:flex-none">
          <ScrollFadeIn className="hero-tag">Available for projects</ScrollFadeIn>
          <ScrollFadeIn>
            <h1 className="hero-h1" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              <span>Hi! I&apos;m</span> <span className="pill yellow">Pramudya</span>
              <span className="w-full h-0"></span>
              <span>a </span>
              <RotatingFontPill
                text="UI/UX Designer"
                className="pill inline-flex items-center justify-center bg-[#111]"
              />
              <span> from </span> <span className="pill border border-[#111] !bg-transparent !text-transparent [-webkit-text-stroke:1px_#111]">Ketapang</span>
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="hero-desc">
              I&apos;m dedicated to crafting websites from concept to launch,
              combining design and development to deliver real impact for
              clients.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <a href="#projects" className="hero-cta">
              Discover my work
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollFadeIn>
        </div>

        {/* ── Card ── shown first on mobile so it anchors the hero visually */}
        <div className="order-first flex w-full justify-center min-[901px]:w-[calc(20%-30px)] min-[901px]:flex-none min-[901px]:justify-end min-[901px]:order-last">
          <FlipCard
            className="w-[50vw] max-w-[260px] min-[901px]:w-full min-[901px]:max-w-none"
            style={{
              aspectRatio: "3/4",
            }}
          />
        </div>
      </div>
    </section>
  );
}
