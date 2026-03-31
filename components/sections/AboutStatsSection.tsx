import type { StatItem } from "@/content/home";

export function AboutStatsSection({ stats }: { stats: StatItem[] }) {
  return (
    <section className="section-pad bg-[var(--section-bg)]">
      <div className="container-main">
        <div className="flex items-center justify-between pb-10 text-xs uppercase tracking-[0.35em] text-[var(--text-accent)]">
          <span>004</span>
          <span className="normal-case tracking-normal">//Quick Overview</span>
        </div>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              We create compelling experiences that feel calm, elevated, and
              modern.
            </p>
            <div className="grid grid-cols-[0.65fr_0.35fr] gap-5">
              <div className="h-52 rounded-3xl bg-gradient-to-br from-[#cfd6df] via-[#b8c2cf] to-[#9aa7b8]" />
              <div className="h-52 rounded-3xl bg-gradient-to-br from-[#e7c7c0] via-[#d7c4c6] to-[#b9c4d2]" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.12] tracking-[-0.02em]">
              WE SPECIALIZE IN DEVELOPING ENGAGING{" "}
              <span className="text-italic text-accent">user</span>
              <br />
              EXPERIENCES FOR EARLY-STAGE STARTUPS.
            </h2>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Lectus amet est nunc orci placerat gravida fusce sed amet. Aliquam
              tincidunt nunc a nunc orci placerat. Duis tincidunt placerat
              massa.
            </p>
            <button className="w-fit rounded-sm bg-black px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
              Contact us
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--divider)] pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((item) => (
            <div key={item.value} className="space-y-2">
              <div className="text-xl font-semibold text-[var(--text-primary)]">
                {item.value}
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--text-accent)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
