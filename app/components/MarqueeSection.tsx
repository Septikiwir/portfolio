import React from 'react';

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
    <div className="stats-strip">
      <div className="stats-track">
        {/* Render items twice for seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) => {
          const words = item.split(" ");
          const firstWord = words[0];
          const rest = words.slice(1).join(" ");

          return (
            <React.Fragment key={`${item}-${i}`}>
              <div className="stat-item">
                <span className="stat-num">{firstWord}</span>{rest ? ` ${rest}` : ""}
              </div>
              <div className="stat-sep">✦</div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
