export function LogoStrip({ logos }: { logos: string[] }) {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="container-main space-y-8">
        <div className="flex items-center gap-6 text-xs text-[var(--text-accent)]">
          <span className="h-px flex-1 bg-[var(--divider)]" />
          <span className="uppercase tracking-[0.25em]">
            360° Trusted partners all over the world
          </span>
          <span className="h-px flex-1 bg-[var(--divider)]" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium text-black/70">
          {logos.map((logo) => (
            <span key={logo} className="opacity-70">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
