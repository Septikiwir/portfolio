import ScrollFadeIn from "./ScrollFadeIn";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const socials = [
  { icon: "𝕏", name: "Twitter", variant: "white" },
  { icon: "in", name: "LinkedIn", variant: "white" },
  { icon: "🎨", name: "Dribbble", variant: "white" },
  { icon: "▶", name: "YouTube", variant: "white" },
  { icon: "📸", name: "Instagram", variant: "white" },
  {
    icon: "✉",
    name: "hello@pramudya.design",
    variant: "yellow",
    span2: true,
    nameStyle: { fontSize: "16px" },
    arrowStyle: { background: "rgba(0,0,0,0.15)" },
    arrowStroke: "#111",
  },
  { icon: "🎵", name: "Spotify", variant: "white" },
];

export default function SocialSection() {
  return (
    <section className="social">
      <ScrollFadeIn className="soc-tag">Connect</ScrollFadeIn>
      <ScrollFadeIn>
        <h2 className="soc-h2">I&apos;m all over the internet</h2>
      </ScrollFadeIn>
      <ScrollFadeIn className="soc-grid">
        {socials.map((s) => (
          <div
            className={`soc-card ${s.variant}${s.span2 ? " span2" : ""}`}
            key={s.name}
            style={s.span2 ? { minHeight: "120px" } : undefined}
          >
            <div className="soc-card-icon">{s.icon}</div>
            <div className="soc-card-name" style={s.nameStyle}>
              {s.name}
            </div>
            <div className="soc-arrow" style={s.arrowStyle}>
              {s.arrowStroke ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={s.arrowStroke}
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              ) : (
                <ArrowIcon />
              )}
            </div>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
