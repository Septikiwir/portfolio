export default function StatsStrip() {
  const items = (
    <>
      <div className="stat-item">
        <span className="stat-num">3.74</span> Cumulative GPA
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">50+</span> wireframes produced
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">2</span> UI/UX internships
      </div>
      <div className="stat-sep">✦</div>
      <div className="stat-item">
        <span className="stat-num">100%</span> user focused
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
