import ScrollFadeIn from "./ScrollFadeIn";

export default function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <ScrollFadeIn className="fcta-tag">Let&apos;s talk</ScrollFadeIn>
      <ScrollFadeIn className="fcta-avatar">AS</ScrollFadeIn>
      <ScrollFadeIn>
        <h2 className="fcta-h2">
          Let&apos;s create something extraordinary together.
        </h2>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <a href="mailto:hello@andrew.design" className="fcta-email">
          hello@andrew.design
        </a>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <a href="#" className="fcta-btn">
          Start a project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </ScrollFadeIn>
    </section>
  );
}
