import { Activity, ArrowLeft, HeartPulse, Leaf } from "lucide-react";

import type { ArticleItem } from "@/content/home";

const ARTICLE_ICON_BY_KEY = {
  monitoring: Activity,
  health_and_safety: HeartPulse,
  eco: Leaf,
} as const;

function ArticleCard({ article }: { article: ArticleItem }) {
  const Icon = ARTICLE_ICON_BY_KEY[article.icon];
  const accent = article.accentColor;

  return (
    <div className="group relative h-[440px] cursor-pointer md:h-[480px]">
      <div
        className="absolute inset-0 rounded-3xl border border-black/10 bg-black/[0.92] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 md:group-hover:translate-x-8 md:group-hover:translate-y-2 md:group-hover:rotate-[2deg]"
        style={{ zIndex: 1 }}
      >
        <div className="p-6 pt-8 opacity-40">
          <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/70">
            {article.label}
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded bg-white/10" />
            <div className="h-3 w-1/2 rounded bg-white/10" />
            <div className="h-3 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </div>

      <div
        className="absolute right-3 top-6 overflow-hidden rounded-r-3xl rounded-l-sm border border-black/10 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 md:group-hover:translate-x-[36px]"
        style={{
          width: 48,
          height: 280,
          zIndex: 2,
          writingMode: "vertical-rl" as const,
          backgroundColor: article.accentColor,
        }}
      >
        <div className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full border border-white/25 bg-white/30" />
        <div className="flex h-full items-center justify-center">
          <span className="select-none text-[11px] font-bold uppercase tracking-[0.25em] text-white">
            Click to read
          </span>
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden rounded-3xl border border-[var(--divider)] bg-[var(--section-bg)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-1 group-hover:-translate-y-1"
        style={{ zIndex: 3 }}
      >
        <div className="relative flex h-full flex-col justify-between p-7 md:p-8">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" style={{ color: accent }} />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: accent }}
            >
              {article.label}
            </span>
          </div>

          <div className="flex flex-1 items-center">
            <h3 className="text-[26px] font-semibold leading-[1.15] tracking-tight text-[var(--text-primary)] md:text-[34px]">
              {article.statement}{" "}
              <span style={{ color: accent }}>{article.boldWord}</span>
              <span className="text-[var(--text-primary)]">.</span>
            </h3>
          </div>

          <div className="pointer-events-none absolute right-8 top-24 h-14 w-20 rounded-xl border border-black/5 bg-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:rotate-2" />
          <div className="pointer-events-none absolute bottom-28 right-12 h-20 w-16 rounded-xl border border-black/5 bg-white/90 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-2 group-hover:-rotate-3" />

          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1.5 text-[11px] font-medium"
                style={{
                  color: accent,
                  borderColor: `color-mix(in oklab, ${accent} 22%, transparent)`,
                  backgroundColor: `color-mix(in oklab, ${accent} 8%, transparent)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticlesSection({ articles }: { articles: ArticleItem[] }) {
  return (
    <section className="bg-[var(--page-bg)] py-12 sm:py-16 md:py-20">
      {/* Mobile-first wrapper + responsive grid; ArticleCard visuals stay unchanged */}
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 md:px-8 lg:px-12 md:space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 text-xs uppercase tracking-[0.35em] text-[var(--text-accent)]">
          <span>005</span>
          <span className="normal-case tracking-normal">{"//Our Articles"}</span>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-display text-[clamp(2.2rem,4.4vw,3.35rem)] leading-[1.05] tracking-[-0.02em]">
            Our latest
            <br />
            <span className="text-italic text-accent">Articles</span> for you
          </h2>
          <p className="max-w-full text-sm leading-7 text-[var(--text-secondary)] sm:max-w-sm">
            Lectus amet est nunc orci placerat gravida fusce sed amet. Aliquam
            tincidunt nunc.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.statement} article={article} />
          ))}
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-[1.02]">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="h-2 w-2 rounded-full bg-black" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
          </div>
          <button className="rounded-full border border-[var(--divider)] bg-white px-5 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-black">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
