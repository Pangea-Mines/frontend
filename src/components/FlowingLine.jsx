const LINES = Array.from({ length: 26 }, (_, i) => i);

function buildPath(i) {
  const baseX = 60 + i * 2.4;
  const amp = 38 + (i % 5) * 7;
  return `M${baseX} 0 C${baseX - amp} 160 ${baseX + amp} 320 ${baseX} 480 ` +
    `C${baseX - amp} 640 ${baseX + amp} 800 ${baseX} 960 ` +
    `C${baseX - amp} 1120 ${baseX + amp} 1280 ${baseX} 1440`;
}

export default function FlowingLine({ className = '' }) {
  return (
    <div className={`flowing-line ${className}`} aria-hidden="true">
      <style>{`
        .flowing-line {
          position: absolute; left: 0; top: 0; bottom: 0; width: 100%;
          pointer-events: none; overflow: hidden; z-index: 0;
        }
      `}</style>
      <svg viewBox="0 0 200 1440" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }} fill="none">
        {LINES.map((i) => (
          <path
            key={i}
            d={buildPath(i)}
            stroke="#9ca3af"
            strokeWidth="0.6"
            opacity={0.1 + (i % 4) * 0.045}
          />
        ))}
      </svg>
    </div>
  );
}
