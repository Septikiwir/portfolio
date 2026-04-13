export default function StatsStrip() {
  const items = (
    <>
      <div className="stat-item">
        <span className="stat-num">Modern</span> UI/UX Design
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">Seamless</span> User Experience
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">End-to-End</span> Product Design
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">100%</span> User Focused
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">Intuitive</span> Wireframing
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">Data-Driven</span> Solutions
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">Pixel-Perfect</span> Interfaces
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">Creative</span> Problem Solving
      </div>
      <div className="stat-sep">✦</div>
    </>
  );

  return (
    <div className="stats-strip">
      <div className="stats-track">
        {items}
        {items}
      </div>
    </div>
  );
}
