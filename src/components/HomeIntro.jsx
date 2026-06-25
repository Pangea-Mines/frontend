import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { homeContent } from '../content/home';

const services = [
  { id: 'resourceEvaluation', path: '/resource-evaluation', borderColor: '#7c3aed' },
  { id: 'laboratory',         path: '/laboratory',          borderColor: '#ea580c' },
  { id: 'minePlanning',       path: '/mine-planning',       borderColor: '#7c3aed' },
  { id: 'environmental',      path: '/environmental',       borderColor: '#ea580c' },
  { id: 'projectDesign',      path: '/project-design',      borderColor: '#7c3aed' },
  { id: 'permits',            path: '/permits',             borderColor: '#ea580c' },
  { id: 'commissioning',      path: '/commissioning',       borderColor: '#7c3aed' },
];

function ServicesCarousel() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActive(Number(mostVisible.target.dataset.index));
      },
      { root: track, threshold: 0.6 }
    );

    cardRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  const step = (dir) => {
    scrollToIndex(Math.max(0, Math.min(services.length - 1, active + dir)));
  };

  return (
    <>
      <div className="svc-pillrow">
        {services.map((svc, i) => (
          <button
            key={svc.path}
            type="button"
            className="svc-pill"
            style={{
              borderColor: svc.borderColor,
              background: active === i ? svc.borderColor : 'transparent',
              color: active === i ? '#fff' : svc.borderColor,
            }}
            onClick={() => scrollToIndex(i)}
          >
            {homeContent.services[svc.id]}
          </button>
        ))}
      </div>

      <div className="svc-carousel">
        <button type="button" className="svc-arrow" onClick={() => step(-1)} disabled={active === 0} aria-label="prev">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>

        <div className="svc-track" ref={trackRef}>
          {services.map((svc, i) => (
            <Link
              key={svc.path}
              to={svc.path}
              className="svc-card"
              ref={(node) => { cardRefs.current[i] = node; if (node) node.dataset.index = i; }}
              style={{ border: `1.5px solid ${svc.borderColor}` }}
            >
              <h3 className="svc-card-title">{homeContent.services[svc.id]}</h3>
              <div className="svc-card-link" style={{ color: svc.borderColor }}>
                {homeContent.servicesCta}
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                  <path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <button type="button" className="svc-arrow" onClick={() => step(1)} disabled={active === services.length - 1} aria-label="next">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
      </div>

      <div className="svc-dots">
        {services.map((svc, i) => (
          <button
            key={svc.path}
            type="button"
            className={`svc-dot${active === i ? ' is-active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={homeContent.services[svc.id]}
          />
        ))}
      </div>
    </>
  );
}

export default function HomeIntro() {
  return (
    <div style={{ width: '100%' }}>
      <style>{`
        .home-hero {
          position: relative; min-height: 100svh; overflow: hidden;
          display: flex; align-items: flex-end;
          background: linear-gradient(180deg, #c8c0b8 0%, #d4cdc5 40%, #e0d9d1 100%);
        }
        .home-hero-bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 60%;
          opacity: 0.7;
        }
        .home-hero-text {
          position: relative; z-index: 1;
          padding: 0 24px 60px; width: 100%;
        }
        .home-hero-h1 { font-size: 26px; font-weight: 800; line-height: 1.15; text-transform: uppercase; margin: 0 0 14px; }
        .home-hero-h1 .c1 { color: #3b1f6e; }
        .home-hero-h1 .c2 { color: #c75a1a; }
        .home-hero-sub { font-size: 12px; color: #4a3728; line-height: 1.7; margin-bottom: 24px; max-width: 540px; }
        .home-cta {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid #c75a1a; padding: 10px 20px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #c75a1a; text-decoration: none;
          background: transparent; cursor: pointer;
        }

        /* Services section */
        .home-cards { background: linear-gradient(180deg,#d8d0c8 0%,#e8e2db 100%); padding: 48px 0 60px; }
        .home-cards-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        .svc-pillrow {
          display: flex; gap: 8px; overflow-x: auto; margin-bottom: 24px;
          padding-bottom: 4px; scrollbar-width: none;
        }
        .svc-pillrow::-webkit-scrollbar { display: none; }
        .svc-pill {
          flex-shrink: 0; border: 1.5px solid; border-radius: 999px;
          padding: 8px 16px; font-size: 9px; font-weight: 700; letter-spacing: 0.04em;
          text-transform: uppercase; white-space: nowrap; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .svc-carousel { display: flex; align-items: center; gap: 10px; }
        .svc-track {
          flex: 1; display: flex; gap: 16px; overflow-x: auto;
          scroll-snap-type: x mandatory; padding-bottom: 4px; scrollbar-width: none;
        }
        .svc-track::-webkit-scrollbar { display: none; }
        .svc-card {
          flex: 0 0 80%; scroll-snap-align: start;
          border-radius: 12px; padding: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          min-height: 140px; text-decoration: none;
          background: rgba(255,255,255,0.55); backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .svc-card:hover { background: rgba(255,255,255,0.75); }
        .svc-card-title { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #1a1a1a; line-height: 1.3; margin: 0; }
        .svc-card-link { font-size: 11px; font-weight: 600; margin-top: 20px; display: flex; align-items: center; gap: 6px; }

        .svc-arrow {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid #c9c1b6; background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #4a3728;
        }
        .svc-arrow:disabled { opacity: 0.3; cursor: default; }

        .svc-dots { display: flex; justify-content: center; gap: 6px; margin-top: 20px; }
        .svc-dot { width: 7px; height: 7px; border-radius: 50%; border: none; background: #c9c1b6; padding: 0; cursor: pointer; transition: width 0.25s, background 0.25s; }
        .svc-dot.is-active { background: #c75a1a; width: 20px; border-radius: 4px; }

        @media(min-width:768px) {
          .home-hero-text { padding: 0 60px 80px; max-width: 700px; }
          .home-hero-h1 { font-size: 42px; }
          .home-cards-inner { padding: 0 40px; }
          .svc-pill { font-size: 11px; padding: 10px 20px; }
          .svc-card { flex: 0 0 calc((100% - 2 * 20px) / 3); }
          .svc-track { gap: 20px; }
        }
        @media(min-width:1200px) {
          .home-hero-h1 { font-size: 52px; }
          .svc-card { flex: 0 0 calc((100% - 3 * 20px) / 4); }
        }
      `}</style>

      {/* Hero */}
      <section className="home-hero">
        <img src="/images/hero-landscape-desert.jpg" className="home-hero-bg" alt="Landscape" />
        <div className="home-hero-text">
          <h1 className="home-hero-h1">
            <span className="c1">{homeContent.hero.titlePart1}</span>
            <span className="c2">{homeContent.hero.titlePart2}</span>
            <span className="c1">{homeContent.hero.titlePart3}</span>
            <span className="c2">{homeContent.hero.titlePart4}</span>
          </h1>
          <p className="home-hero-sub">{homeContent.hero.subtitle}</p>
          <Link to="/resource-evaluation" className="home-cta">
            {homeContent.hero.cta}
            <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
              <path d="M0 5h22M17 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Services carousel */}
      <section className="home-cards">
        <div className="home-cards-inner">
          <ServicesCarousel />
        </div>
      </section>
    </div>
  );
}
