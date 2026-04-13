import ScrollFadeIn from "./ScrollFadeIn";

const steps = [
  {
    num: "01",
    tag: "Kreasitech (Internship)",
    title: "UI/UX Designer",
    mobileTitle: "UI/UX Designer at Kreasitech",
    desc: "Spearheaded UI/UX initiatives and developed robust design systems to streamline digital experiences.",
    items: [
      { name: "Product Design", desc: "Mastered end-to-end design processes from ideation to high-fidelity mockups." },
      { name: "Prototyping", desc: "Built interactive prototypes in Figma to validate workflows and user journeys." },
      { name: "Design Handoff", desc: "Collaborated directly with developers to guarantee pixel-perfect implementation." }
    ],
    duration: "Aug 2025 - Mar 2026",
  },
  {
    num: "02",
    tag: "Seven Inc (Internship)",
    title: "UI/UX Designer",
    mobileTitle: "UI/UX Designer at Seven Inc",
    desc: "Led comprehensive user research and developed extensive interactive prototypes.",
    items: [
      { name: "Wireframing", desc: "Produced high-fidelity wireframes and interactive prototypes in Figma." },
      { name: "User Research", desc: "Conducted rigorous usability testing and user feedback analysis." },
      { name: "UX Strategy", desc: "Translated complex user surveys into actionable design solutions." }
    ],
    duration: "Feb 2024 - Jun 2024",
  },
  {
    num: "03",
    tag: "Education",
    title: "Universitas AMIKOM Yogyakarta",
    mobileTitle: "Bachelor of Informatics at AMIKOM",
    desc: "Focused on UI/UX Design with a strong academic foundation.",
    items: [
      { name: "Informatics", desc: "Specializing in software engineering and product design." },
      { name: "GPA", desc: "Graduated with 3.74 / 4.00 total score." },
      { name: "Hard Skills", desc: "Skilled in creating user-centered designs and consistent design systems" }
    ],
    duration: "Aug 2022 - Mar 2026",
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered", variant: "yellow" as const },
  { value: "150+", label: "High-Fidelity Screens", variant: "dark" as const },
  { value: "2 Years+", label: "Experience", variant: "light" as const },
];

export default function HowItWorks() {
  return (
    <section className="how" id="about">
      <div className="section-inner">
        <ScrollFadeIn>
          <div className="fn-label">Career Journey</div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <h2 className="how-h2">Experience &amp; Education</h2>
        </ScrollFadeIn>

        <div className="how-steps">
          {steps.map((step) => (
            <ScrollFadeIn
              className="how-step group !flex !flex-col lg:!grid lg:!grid-cols-[180px_100px_minmax(0,1fr)_auto] !gap-y-6 lg:!gap-y-0 lg:!gap-x-12 !py-8 lg:!py-12"
              key={step.num}
            >
              {/* Column 1: Tag (Pill) */}
              <div className="lg:col-start-1">
                {step.tag && (
                  <div className="!px-4 !py-1.5 lg:!px-5 lg:!py-2 rounded-full border border-[#333] text-[12px] lg:!text-[13px] text-white font-medium inline-block">
                    {step.tag}
                  </div>
                )}
              </div>

              {/* Column 2: Number */}
              <div className="text-[32px] lg:text-[40px] font-medium tracking-tight text-white leading-none mt-1 lg:mt-0 lg:col-start-2">
                <span className="text-[#B4FF39]">/</span>{step.num}
              </div>

              {/* Column 3: Content (Title + Items) */}
              <div className="flex flex-col gap-6 lg:col-start-3">
                {/* Title */}
                <div className="text-[22px] lg:text-[28px] font-bold leading-[1.2] text-white">
                  {step.mobileTitle}
                </div>

                {/* Items List */}
                <div className="flex flex-col gap-4 lg:gap-5">
                  {step.items.map((item, idx) => (
                    <div key={idx} className="flex gap-3 lg:gap-4 items-start">
                      <svg className="w-5 h-5 text-[#B4FF39] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929" />
                      </svg>
                      <div>
                        <span className="font-bold text-white text-[14px] lg:text-[15px]">{item.name}: </span>
                        <span className="text-[#888] text-[13px] lg:text-[14px] leading-[1.6] block mt-1">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 4: Duration */}
              <div className="flex items-start gap-2 text-[#888] text-[13px] lg:text-[14px] font-medium italic lg:col-start-4 lg:mt-0 lg:justify-end">
                <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span>{step.duration}</span>
              </div>
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
      </div>
    </section>
  );
}
