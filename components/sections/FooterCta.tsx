export function FooterCta() {
  return (
    <section className="bg-[var(--footer-bg)] py-20 text-[var(--footer-text)]">
      <div className="container-main">
        <div className="flex items-center justify-between pb-10 text-xs uppercase tracking-[0.35em] text-white/40">
          <span>007</span>
          <span className="normal-case tracking-normal text-white/40">
            Let&apos;s Talk
          </span>
        </div>
        <div className="space-y-10">
          <div className="text-display text-[clamp(2rem,4.6vw,3.2rem)] leading-none tracking-[-0.02em] text-white/95">
            contact
          </div>

          <h2 className="text-display text-[clamp(3.4rem,9vw,7.6rem)] leading-[0.92] tracking-[-0.03em] text-white">
            <span className="text-white">hello</span>
            <span className="inline-flex align-baseline">
              <span
                className="mx-[0.12em] inline-flex items-center justify-center rounded-full border-[0.14em] px-[0.34em]"
                style={{
                  borderColor: "#B9A9FF",
                  color: "#B9A9FF",
                  lineHeight: 1,
                }}
              >
                @
              </span>
            </span>
            <span className="text-white">tigranz</span>
            <span style={{ color: "#F2D25C" }}>.</span>
            <span style={{ color: "#C9FF3D" }}>com</span>
          </h2>
        </div>

        <div className="mt-14 rounded-3xl border border-white/15 p-8">
          <button className="w-full rounded-2xl border border-white/25 px-8 py-5 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/60">
            LET&apos;S TALK
          </button>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/55">
            <span>
              Made with <span style={{ color: "#B9A9FF" }}>LOVE</span> by ©Tigran
              Azatyan.
            </span>
            <div className="flex items-center gap-8">
              <a className="text-white/80 transition hover:text-white" href="#">
                Instagram
              </a>
              <a className="text-white/80 transition hover:text-white" href="#">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
