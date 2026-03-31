import { ArrowLeft } from "lucide-react";

import type { ProjectItem } from "@/content/home";

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="section-pad bg-[var(--page-bg)]">
      <div className="container-main space-y-10">
        <div className="flex items-center justify-between pb-2 text-xs uppercase tracking-[0.35em] text-[var(--text-accent)]">
          <span>003</span>
          <span className="normal-case tracking-normal">//Our Works</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display text-[clamp(2.2rem,4.4vw,3.35rem)] leading-[1.05] tracking-[-0.02em]">
            Our latest
            <br />
            <span className="text-italic text-accent">works</span> for you
          </h2>
          <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
            Lectus amet est nunc orci placerat gravida fusce sed amet. Aliquam
            tincidunt nunc a nunc orci.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-white"
            >
              <div
                className={`h-80 w-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-[1.03]`}
              />
              <div className="absolute left-5 top-5 flex gap-2 text-[0.65rem] font-medium text-white/90">
                <span className="rounded-full bg-black/30 px-3 py-1">
                  {project.tag}
                </span>
                <span className="rounded-full bg-black/30 px-3 py-1">
                  {project.tagTwo}
                </span>
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 h-28 ${
                  idx === 0
                    ? "bg-gradient-to-t from-[rgba(224,138,124,0.75)] via-[rgba(224,138,124,0.25)] to-transparent"
                    : "bg-gradient-to-t from-[rgba(108,122,137,0.55)] via-[rgba(108,122,137,0.18)] to-transparent"
                }`}
              />
              <div className="absolute bottom-6 left-6 space-y-1">
                <div className="text-lg font-semibold text-white">
                  {project.title}
                </div>
                <div className="text-xs text-white/80">
                  Lectus aliquam tincidunt nunc a nunc orci.
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-[1.02]">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="h-2 w-2 rounded-full bg-black" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
          </div>
          <button className="rounded-full border border-[var(--divider)] bg-white px-5 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-black">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
