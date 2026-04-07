const marqueeItems = [
  "Corporate website",
  "Landing page",
  "Blog",
  "Social network",
  "E-commerce",
  "Dashboard",
  "Mobile App",
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
