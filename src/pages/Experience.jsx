import { useEffect, useRef, useState } from 'react';
import { experienceContent } from '../content/experience';

export default function Experience() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  const { projects } = experienceContent;
  const N = projects.length;

  const textPosStyle = {
    tl: { top: 40,    left: 48,  right: 'auto', bottom: 'auto', textAlign: 'left'  },
    tr: { top: 40,    right: 48, left: 'auto',  bottom: 'auto', textAlign: 'right' },
    bl: { bottom: 52, left: 48,  right: 'auto', top: 'auto',    textAlign: 'left'  },
    br: { bottom: 52, right: 48, left: 'auto',  top: 'auto',    textAlign: 'right' },
  };

  const subPosBase = {
    tl: { top: 88,  left: 40,  right: 'auto',  bottom: 'auto', alignItems: 'flex-start' },
    tr: { top: 88,  right: 40, left: 'auto',   bottom: 'auto', alignItems: 'flex-end'   },
    bl: { bottom: 148, left: 40, right: 'auto', top: 'auto',   alignItems: 'flex-start' },
    br: { bottom: 148, right: 40, left: 'auto', top: 'auto',   alignItems: 'flex-end'   },
  };

  // Desktop diagonal scroll
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const update = () => {
      const rect     = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const total    = section.offsetHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(1, scrolled / total) : 0;
      const n        = N - 1;
      const tx       = -progress * n * window.innerWidth;
      const ty       = -progress * n * window.innerHeight;
      track.style.transform = `translate(${tx}px,${ty}px)`;
      setActiveIdx(Math.round(progress * n));
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [N, isMobile]);

  // Resize detection
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Mobile card scroll-in animation
  useEffect(() => {
    if (!isMobile) return;
    const cards = document.querySelectorAll('.exp-mobile-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div>
      <style>{`
        /* ── Shared typography ── */
        .exp-project-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #b0a89e;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .exp-project-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.45;
          margin: 0 0 10px;
          white-space: pre-wrap;
        }
        .exp-project-desc {
          font-size: 12px;
          line-height: 1.8;
          color: #555;
          margin: 0;
        }

        /* ── Mobile card list ── */
        .exp-mobile-list {
          padding: 24px 16px 80px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          background: #fff;
        }
        .exp-mobile-card {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .exp-mobile-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .exp-mobile-img-wrap {
          width: 100%;
          height: 56vw;
          border-radius: 14px;
          overflow: hidden;
          background: #f5f4f2;
        }
        .exp-mobile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .exp-mobile-img.contain {
          object-fit: contain;
        }
        .exp-mobile-text {
          padding: 14px 4px 0;
        }
        .exp-mobile-divider {
          width: 32px;
          height: 2px;
          background: #c75a1a;
          border-radius: 1px;
          margin-bottom: 12px;
        }

        /* ── Desktop diagonal ── */
        .exp-section { position: relative; height: calc(${N} * 100svh); }
        .exp-sticky { position: sticky; top: 0; height: 100svh; overflow: hidden; background: #fff; }
        .exp-track { position: absolute; top: 0; left: 0; will-change: transform; }
        .exp-slide {
          position: absolute;
          width: 100vw;
          height: 100svh;
          top: calc(var(--idx) * 100svh);
          left: calc(var(--idx) * 100vw);
          background: #fff;
        }
        .exp-img-panel { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .exp-img-main { width: 100%; height: 100%; object-fit: cover; display: block; }
        .exp-sub-wrap { position: absolute; display: flex; flex-direction: column; width: 25%; }
        .exp-sub-wrap img { width: 100%; height: auto; max-height: 26vh; object-fit: contain; display: block; }
        .exp-main-label { position: absolute; font-size: 10px; font-weight: 600; color: #5a7fc2; letter-spacing: 0.06em; line-height: 1.3; }
        .exp-main-label-tl { top: 88px; left: 40px; }
        .exp-main-label-tr { top: 88px; right: 40px; text-align: right; }
        .exp-main-label-bl { bottom: 100px; left: 40px; }
        .exp-main-label-br { bottom: 100px; right: 40px; text-align: right; }
        .exp-main-label-tc { top: 88px; left: 50%; transform: translateX(-50%); text-align: center; white-space: nowrap; }
        .exp-sub-label { font-size: 10px; font-weight: 600; color: #5a7fc2; letter-spacing: 0.06em; margin-bottom: 6px; line-height: 1.3; }
        .exp-sub-tr .exp-sub-label { text-align: right; }
        .exp-text-block { position: absolute; max-width: 380px; }
        .exp-dots { position: absolute; bottom: 56px; left: 50%; transform: translateX(-50%); z-index: 10; display: flex; flex-direction: row; gap: 6px; align-items: center; }
        .exp-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(0,0,0,0.15); transition: width 0.35s, background 0.35s, border-radius 0.35s; flex-shrink: 0; }
        .exp-dot.active { background: #c75a1a; width: 16px; border-radius: 2px; }

        @media (min-width: 1280px) {
          .exp-text-block { max-width: 420px; }
          .exp-project-title { font-size: 17px; }
          .exp-project-desc { font-size: 13px; }
        }
      `}</style>

      {isMobile ? (
        <div className="exp-mobile-list">
          {projects.map((project, i) => (
            <div key={project.id} className="exp-mobile-card">
              <div className="exp-mobile-img-wrap">
                <img
                  src={project.cover}
                  className={`exp-mobile-img${project.imageContain ? ' contain' : ''}`}
                  alt={project.titleRu || ''}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
              {project.titleRu && (
                <div className="exp-mobile-text">
                  <span className="exp-project-num">{String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
                  <div className="exp-mobile-divider" />
                  <h2 className="exp-project-title">{project.titleRu}</h2>
                  <p className="exp-project-desc">{project.descRu}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div ref={sectionRef} className="exp-section">
          <div className="exp-sticky">
            <div className="exp-dots">
              {projects.map((_, i) => (
                <div key={i} className={`exp-dot${i === activeIdx ? ' active' : ''}`} />
              ))}
            </div>
            <div ref={trackRef} className="exp-track">
              {projects.map((project, i) => (
                <div key={project.id} className="exp-slide" style={{ '--idx': i }}>
                  <div className="exp-img-panel" style={project.imageContain ? { padding: '7vh 7vw' } : {}}>
                    <img
                      src={project.cover}
                      className="exp-img-main"
                      alt={project.titleRu}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      style={project.imageContain ? { objectFit: 'contain' } : {}}
                    />
                    {(project.subImages || []).map((sub, si) => (
                      <div key={si} className="exp-sub-wrap"
                        style={{ ...subPosBase[sub.pos], display: 'flex', flexDirection: 'column', ...(sub.style || {}) }}>
                        {sub.label && <span className="exp-sub-label" style={sub.labelStyle || {}}>{sub.label}</span>}
                        <img src={sub.src} alt={sub.label || ''} loading="lazy" />
                      </div>
                    ))}
                    {project.mainLabel && (
                      <span className={`exp-main-label exp-main-label-${project.mainLabel.pos}`}>
                        {project.mainLabel.text}
                      </span>
                    )}
                  </div>
                  {project.titleRu && !project.hideText && (
                    <div className="exp-text-block" style={{ ...textPosStyle[project.textPos || 'tr'], ...(project.textStyle || {}) }}>
                      <span className="exp-project-num" style={project.textWhite ? { color: 'rgba(255,255,255,0.6)' } : {}}>{String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
                      <h2 className="exp-project-title" style={project.textWhite ? { color: '#fff' } : {}}>{project.titleRu}</h2>
                      <p className="exp-project-desc" style={project.textWhite ? { color: 'rgba(255,255,255,0.8)' } : {}}>{project.descRu}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
