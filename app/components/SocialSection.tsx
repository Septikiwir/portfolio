import ScrollFadeIn from "./ScrollFadeIn";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const socials = [
  { icon: "in", name: "LinkedIn", variant: "white" },
  { icon: "🎨", name: "Portfolio", variant: "white" },
  { icon: "🌐", name: "mue.works", variant: "white" },
  { icon: "📞", name: "+62 8131-888-1635", variant: "white" },
  {
    icon: "✉",
    name: "workwithyutaya@gmail.com",
    variant: "yellow",
    span2: true,
    nameStyle: { fontSize: "16px" },
    arrowStyle: { background: "rgba(0,0,0,0.15)" },
    arrowStroke: "#111",
  },
];

export default function SocialSection() {
  return (
    <section className="social" id="contact">
      <div className="section-inner">
        <ScrollFadeIn>
          <div className="fn-label !text-[#111]">connect</div>
        </ScrollFadeIn>
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
      </div>
    </section>
  );
}
