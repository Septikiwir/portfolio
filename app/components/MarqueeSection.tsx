const marqueeItems = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Dashboard Design",
  "Mobile App UX",
  "Information Architecture",
  "SFA Systems",
  "Sales Intelligence",
];

export default function MarqueeSection() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {/* Render items twice for seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
