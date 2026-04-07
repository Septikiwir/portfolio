export default function StatsStrip() {
  const items = (
    <>
      <div className="stat-item">
        <span className="stat-num">18+</span> satisfied clients
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">14</span> projects finished
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">8+</span> years experience
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">95%</span> client retention rate
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">14</span> projects finished
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">8+</span> years experience
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">95%</span> client retention rate
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
