import { ArrowLeft } from "lucide-react";

import type { ProjectItem } from "@/content/home";

function getRepeatedImages(images: string[] | undefined, count: number) {
  if (!images || images.length === 0) return Array.from({ length: count });
  return Array.from({ length: count }, (_, index) => images[index % images.length]);
}

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="bg-[var(--page-bg)] py-12 sm:py-16 md:py-20 overflow-x-clip">
      {/* Wrapper-only refactor: cards remain a black box; only layout/spacing changes */}
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 md:px-8 lg:px-12 md:space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 text-xs uppercase tracking-[0.35em] text-[var(--text-accent)]">
          <span>003</span>
          <span className="normal-case tracking-normal">{"//Our Works"}</span>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-display text-[clamp(2.2rem,4.4vw,3.35rem)] leading-[1.05] tracking-[-0.02em]">
            Our latest
            <br />
            <span className="text-italic text-accent">works</span> for you
          </h2>
          <p className="max-w-full text-sm leading-7 text-[var(--text-secondary)] sm:max-w-sm">
            Lectus amet est nunc orci placerat gravida fusce sed amet. Aliquam
            tincidunt nunc a nunc orci.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
          {projects.map((project, projectIndex) => {
            const hoverImageCount = projectIndex % 2 === 0 ? 2 : 3;
            const tabHoverImages = getRepeatedImages(project.images, hoverImageCount);
            const tabLandscapeImages = getRepeatedImages(project.images, 0);

            const hoverImageFrames = (
              hoverImageCount === 3
                ? [
                    { rotate: "-rotate-[7deg]", hoverLift: "group-hover:-translate-y-2" },
                    { rotate: "rotate-[2deg]", hoverLift: "group-hover:-translate-y-1" },
                    { rotate: "rotate-[10deg]", hoverLift: "group-hover:-translate-y-1" },
                  ]
                : [
                    { rotate: "-rotate-[7deg]", hoverLift: "group-hover:-translate-y-2" },
                    { rotate: "rotate-[6deg]", hoverLift: "group-hover:-translate-y-1" },
                  ]
            ) satisfies Array<{ rotate: string; hoverLift: string }>;

            return (
              <div key={project.title} className="group relative transform-gpu">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-0 -translate-y-4 sm:translate-x-4"
                >
                  <div className="relative h-full w-full">
                    <div className="absolute left-10 top-0 -translate-y-1/2">
                      <div className="relative h-10 w-32">
                        <div className="absolute inset-0 rounded-t-2xl rounded-b-lg border border-[var(--divider)] bg-[var(--page-bg)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--page-bg)] after:content-[''] transition-opacity duration-300 ease-out group-hover:opacity-0" />

                        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2">
                          <div className="translate-y-0 transition-transform duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-[85%]">
                            <div className="flex items-end gap-2 opacity-0 translate-y-10 scale-[0.98] transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform delay-0 group-hover:delay-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                              {tabLandscapeImages.map((src, index) => (
                                <div
                                  key={`back-tab-4x3-${index}`}
                                  className="h-40 w-30 overflow-hidden rounded-lg border border-[var(--divider)] bg-[var(--page-bg)] shadow-sm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-1"
                                  style={{ transitionDelay: `${160 + index * 80}ms` }}
                                >
                                  {typeof src === "string" ? (
                                    <img
                                      src={src}
                                      alt=""
                                      className="h-full w-full object-cover"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-full overflow-hidden rounded-[1.75rem] border border-[var(--divider)] bg-[var(--page-bg)]" />
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-0 -translate-y-2 sm:translate-x-2"
                >
                  <div className="relative h-full w-full">
                    <div
                      className="absolute left-9 top-0 h-10 w-32 -translate-y-1/2 rounded-t-2xl rounded-b-lg border border-[var(--divider)] bg-[var(--section-bg)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--section-bg)] after:content-['']"
                    />
                    <div className="h-full w-full overflow-hidden rounded-[1.75rem] border border-[var(--divider)] bg-[var(--section-bg)]" />
                  </div>
                </div>

                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute left-8 top-0 z-0 h-11 w-36 -translate-y-1/2 origin-bottom-left rounded-t-2xl rounded-b-lg border border-[var(--divider)] bg-[var(--section-bg)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--section-bg)] after:content-[''] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:opacity-0 group-hover:-translate-y-[30%] group-hover:scale-[0.98] group-hover:-rotate-[1.5deg]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 translate-y-[18%] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-[70%]"
                  >
                    <div className="opacity-0 scale-[0.98] transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform delay-0 group-hover:delay-150 group-hover:opacity-100 group-hover:scale-100">
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        {tabHoverImages.map((src, index) => {
                          const frame = hoverImageFrames[index];
                          const widthClass =
                            hoverImageCount === 3
                              ? "w-28 sm:w-44"
                              : "w-32 sm:w-[15.5rem]";
                          const aspectClass = hoverImageCount === 3 ? "aspect-[3/4]" : "aspect-video";

                          return (
                            <div
                              key={`front-hover-${index}`}
                              className={`relative ${widthClass} ${aspectClass} ${frame.rotate} overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--page-bg)] shadow-sm transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${frame.hoverLift}`}
                              style={{ transitionDelay: `${220 + index * 80}ms` }}
                            >
                              {typeof src === "string" ? (
                                <img
                                  src={src}
                                  alt=""
                                  className="h-full w-full object-cover opacity-100"
                                  loading="lazy"
                                  decoding="async"
                                />
                              ) : null}
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-20 overflow-hidden rounded-[1.75rem] border border-[var(--divider)] bg-[var(--section-bg)] shadow-sm transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-md">
                    <div className="relative h-80 w-full pt-8">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-br from-[var(--section-bg)] via-[var(--page-bg)] to-[var(--section-bg)] opacity-40"
                      />

                      <div className="absolute left-5 top-5 flex gap-2 text-[0.65rem] font-medium text-[var(--text-secondary)]">
                        <span className="rounded-full border border-[var(--divider)] bg-[var(--page-bg)] px-3 py-1">
                          {project.tag}
                        </span>
                        <span className="rounded-full border border-[var(--divider)] bg-[var(--page-bg)] px-3 py-1">
                          {project.tagTwo}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--section-bg)] via-transparent to-transparent p-6">
                        <div className="text-lg font-semibold text-[var(--text-primary)]">
                          {project.title}
                        </div>
                        <div className="text-xs text-[var(--text-secondary)]">
                          Lectus aliquam tincidunt nunc a nunc orci.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
