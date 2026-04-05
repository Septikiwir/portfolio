export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type ProjectItem = {
  tag: string;
  tagTwo: string;
  title: string;
  gradient: string;
  images?: string[];
};

export type ArticleItem = {
  label: string;
  statement: string;
  boldWord: string;
  tags: string[];
  accentColor: string;
  icon: "monitoring" | "health_and_safety" | "eco";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#" },
  { label: "About&Contact", href: "#" },
];

export const logos = ["Genius", "Odento", "Outriva", "Marbello", "Starly", "Clento"];

export const services: ServiceItem[] = [
  {
    id: "001",
    title: "UI/UX DESIGN",
    description: "Interface systems crafted to elevate digital clarity.",
  },
  {
    id: "002",
    title: "MOTION DESIGN",
    description: "Narrative motion that adds warmth and momentum.",
  },
  {
    id: "003",
    title: "DESIGN SYSTEM",
    description: "Scalable guidelines built for modern teams.",
  },
  {
    id: "004",
    title: "BRANDING DESIGN",
    description: "Identity direction with a refined editorial voice.",
  },
];

export const projects: ProjectItem[] = [
  {
    tag: "Branding",
    tagTwo: "Motion",
    title: "LAZO. MOTION DESIGN",
    gradient: "from-[#e9b0a7] via-[#e3a6a0] to-[#d3897c]",
    images: ["/window.svg", "/next.svg"],
  },
  {
    tag: "Strategy",
    tagTwo: "UI/UX",
    title: "CRYPTO. APP DESIGN",
    gradient: "from-[#c9d0d7] via-[#b7c1c9] to-[#8f9dad]",
    images: ["/vercel.svg", "/globe.svg"],
  },
];

export const stats: StatItem[] = [
  ["85+", "Team Members"],
  ["290+", "Completed Projects"],
  ["90%", "User Satisfaction"],
  ["20+", "Marketing Research"],
  ["05+", "Nation Country"],
].map(([value, label]) => ({ value, label }));

export const articles: ArticleItem[] = [
  {
    label: "CASE STUDY",
    statement:
      "Built a scalable dashboard system that cut analytics load time by",
    boldWord: "60%",
    tags: ["UI Design", "Dashboard", "Figma"],
    accentColor: "var(--hero-slate)",
    icon: "monitoring",
  },
  {
    label: "CASE STUDY",
    statement:
      "Redesigned the patient portal improving user satisfaction scores by",
    boldWord: "45%",
    tags: ["UX Research", "Mobile", "Prototype"],
    accentColor: "var(--hero-coral)",
    icon: "health_and_safety",
  },
  {
    label: "CASE STUDY",
    statement:
      "Crafted an eco-commerce experience that boosted conversion rate by",
    boldWord: "35%",
    tags: ["E-Commerce", "Web Design", "Webflow"],
    accentColor: "var(--text-secondary)",
    icon: "eco",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What Services Come in Aezo?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas incidunt sed cum. Pellentesque morbi purus facilisi non sed.",
  },
  {
    question: "Why I choose Aezo?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et mollitia, neque ut. Fusce sed amet pretium.",
  },
  {
    question: "Can I pause or cancel subscription?",
    answer:
      "Yes. You can pause or end your engagement with a two-week notice window.",
  },
  {
    question: "How long does services take?",
    answer:
      "Timelines vary by scope, but most engagements start delivering within 2-3 weeks.",
  },
  {
    question: "Can I pause / cancel my order?",
    answer:
      "Yes. We can pause, reschedule, or cancel depending on the current milestone and delivery stage.",
  },
];
