import ScrollFadeIn from "./ScrollFadeIn";

const steps = [
  {
    num: "01",
    title: "I'll dive deep into your project and get a feeling for your vision",
    desc: "We start with a discovery call to understand your business, goals, and target audience.",
    items: ["Discovery call", "Requirements gathering", "Competitor analysis", "Project brief"],
    duration: "1–2 days",
  },
  {
    num: "02",
    title: "I'll make sure that what I bring to you is absolutely stunning",
    desc: "Creating wireframes and high-fidelity designs that align with your brand identity.",
    items: ["Wireframing", "Visual design", "Design system", "Prototype"],
    duration: "3–5 days",
  },
  {
    num: "03",
    title: "Bring it to life. The universe is your canvas",
    desc: "Development phase where designs are transformed into functional, responsive websites.",
    items: ["Development", "Animations", "CMS integration", "Testing"],
    duration: "5–10 days",
  },
  {
    num: "04",
    title: "Your project, ready to take on the world",
    desc: "Final review, launch preparation, and ongoing support to ensure everything runs perfectly.",
    items: ["Final review", "Launch", "Training", "Support"],
    duration: "1–2 days",
  },
];

const stats = [
  { value: "95+", label: "Client satisfaction rate", variant: "yellow" as const },
  { value: "10+", label: "Years of experience", variant: "dark" as const },
  { value: "24+", label: "Projects delivered", variant: "light" as const },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <ScrollFadeIn className="how-tag">Process</ScrollFadeIn>
      <ScrollFadeIn>
        <h2 className="how-h2">How it works</h2>
      </ScrollFadeIn>

      <div className="how-steps">
        {steps.map((step) => (
          <ScrollFadeIn className="how-step" key={step.num}>
            <div className="step-num">{step.num} ——</div>
            <div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
            <div className="step-items">
              {step.items.map((item) => (
                <div className="step-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className="step-duration">{step.duration}</div>
          </ScrollFadeIn>
        ))}
      </div>

      <ScrollFadeIn className="how-stats">
        {stats.map((stat) => (
          <div className={`hstat ${stat.variant}`} key={stat.label}>
            <div className="hstat-num">{stat.value}</div>
            <div className="hstat-label">{stat.label}</div>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
