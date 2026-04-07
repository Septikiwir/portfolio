import ScrollFadeIn from "./ScrollFadeIn";

const tools = [
  {
    icon: "🎨",
    iconBg: "#f0f4ff",
    name: "Figma",
    desc: "UI/UX Design & Prototyping",
    progress: 95,
  },
  {
    icon: "⚡",
    iconBg: "#fff8f0",
    name: "Framer",
    desc: "Interactive Web Design",
    progress: 88,
  },
  {
    icon: "💻",
    iconBg: "#f0fff4",
    name: "Webflow / Figma",
    desc: "No-code Development",
    progress: 80,
  },
];

export default function ToolboxSection() {
  return (
    <section className="toolbox" id="about">
      <ScrollFadeIn className="toolbox-left">
        <div className="tb-tag">Tools &amp; Skills</div>
        <h2>
          My creative
          <br />
          toolbox
        </h2>
      </ScrollFadeIn>
      <ScrollFadeIn className="tool-cards">
        {tools.map((tool) => (
          <div className="tool-card" key={tool.name}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: tool.iconBg }}>
                {tool.icon}
              </div>
              <div>
                <div className="tc-name">{tool.name}</div>
                <div className="tc-desc">{tool.desc}</div>
              </div>
            </div>
            <div className="tc-bar">
              <div
                className="tc-bar-fill"
                style={{ width: `${tool.progress}%` }}
              />
            </div>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
