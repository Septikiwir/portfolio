import ScrollFadeIn from "./ScrollFadeIn";

const testimonials = [
  {
    text: "Pramudya transformed our brand completely. The attention to detail and creative vision exceeded every expectation we had for the project.",
    initials: "JS",
    name: "James Sullivan",
    role: "CEO, TechStart",
  },
  {
    text: "Working with Pramudya was a pleasure from start to finish. He delivered a pixel-perfect website that our customers absolutely love.",
    initials: "ML",
    name: "Maria Lopez",
    role: "Founder, Bloom Co.",
  },
  {
    text: "Exceptional designer with a rare ability to translate complex ideas into beautiful, intuitive interfaces. Highly recommended.",
    initials: "RK",
    name: "Ryan Kim",
    role: "Product Lead, Nexus",
  },
  {
    text: "The redesign increased our conversion rate by 40%. Pramudya's strategic approach to design made all the difference for our business.",
    initials: "SC",
    name: "Sarah Chen",
    role: "CMO, Velocity",
  },
  {
    text: "Pramudya has an incredible eye for design and a deep understanding of user experience. Our new site has gotten so much praise.",
    initials: "DP",
    name: "David Park",
    role: "Director, Studio Co.",
  },
  {
    text: "Fast, professional, and creative. Pramudya delivers results that speak for themselves. Will definitely work together again.",
    initials: "EW",
    name: "Emma Wilson",
    role: "Owner, EW Brands",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <ScrollFadeIn className="test-tag">Testimonials</ScrollFadeIn>
      <ScrollFadeIn>
        <h2 className="test-h2">
          Don&apos;t take my
          <br />
          word for it{" "}
          <span style={{ color: "var(--yellow)" }}>✦</span>
        </h2>
      </ScrollFadeIn>
      <ScrollFadeIn className="test-scroll">
        {testimonials.map((t) => (
          <div className="test-card" key={t.name}>
            <div className="stars">★★★★★</div>
            <p className="test-text">{t.text}</p>
            <div className="test-author">
              <div className="test-avatar">{t.initials}</div>
              <div>
                <div className="test-name">{t.name}</div>
                <div className="test-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
