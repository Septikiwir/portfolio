import type { ServiceItem } from "@/content/home";

export function ServicesSection({ services }: { services: ServiceItem[] }) {
  return (
    <section className="bg-[var(--section-bg)] py-12 sm:py-16 md:py-20">
      {/* Mobile-first section wrapper: consistent padding + max width */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 text-xs uppercase tracking-[0.35em] text-[var(--text-accent)] sm:pb-10">
          <span>002</span>
          <span className="normal-case tracking-normal text-[var(--text-accent)]">
            {"//Our Services"}
          </span>
        </div>
        <div className="grid gap-8 md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="max-w-full text-sm leading-7 text-[var(--text-secondary)] sm:max-w-sm">
              Lectus amet est nunc orci placerat gravida fusce sed amet. Aliquam
              tincidunt nunc a nunc orci placerat gravida fusce sed amet.
            </p>
            <div className="h-[320px] rounded-3xl bg-gradient-to-br from-[#f1d2cc] via-[#d7c4c6] to-[#b8c5d2]" />
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <p className="max-w-full text-sm leading-7 text-[var(--text-secondary)] sm:max-w-xs">
                Lectus aliquam tincidunt nunc a nunc orci placerat gravida.
                Fusce sed amet.
              </p>
              <div className="h-24 w-20 rounded-2xl bg-gradient-to-br from-[#e8c4bd] via-[#d1c4cb] to-[#b8c1d0]" />
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-display text-[clamp(2.2rem,4.2vw,3.25rem)] leading-[1.05] tracking-[-0.02em]">
              Providing the
              <br />
              <span className="text-italic text-accent">services for you</span>
            </h2>
            <div className="divide-y divide-[var(--divider)] border-t border-[var(--divider)]">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="grid items-center gap-3 py-6 md:grid-cols-[0.14fr_0.56fr_0.3fr] md:gap-4"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--text-accent)]">
                    {service.id}
                  </div>
                  <div className="text-[15px] font-semibold tracking-wide text-[var(--text-primary)]">
                    {service.title}
                  </div>
                  <div className="text-xs leading-5 text-[var(--text-secondary)] md:text-right">
                    Lectus aliquam tincidunt nunc a nunc orci placerat.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
