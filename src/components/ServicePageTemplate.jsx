import { useEffect, useRef, useState } from 'react';

/* Shared template for all service pages */

const css = `
  .spt-hero {
    position: relative; min-height: 100svh; overflow: hidden;
    display: flex; align-items: center;
  }
  .spt-hero-img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    opacity: 0.22; pointer-events: none;
  }
  .spt-hero-img img { width: 100%; height: 100%; object-fit: contain; }
  .spt-hero-text {
    position: relative; z-index: 1;
    width: 100%; padding: 80px 24px 48px;
    text-align: center;
  }
  .spt-hero-num {
    font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
    text-transform: uppercase; margin-bottom: 16px;
  }
  .spt-hero-title { font-size: 28px; font-weight: 800; text-transform: uppercase; line-height: 1.1; margin: 0 0 16px; }
  .spt-hero-sub { font-size: 13px; line-height: 1.7; max-width: 500px; margin: 0 auto; }

  .spt-content { background: #fff; position: relative; }
  .spt-wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; position: relative; }
  .spt-item {
    position: relative;
    display: flex; flex-direction: column; gap: 10px;
    padding: 34px 0 34px 18px;
    border-top: 1px solid #e5e7eb;
  }
  .spt-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 30px;
    bottom: 30px;
    width: 3px;
    border-radius: 999px;
    background: #d1d5db;
  }
  .spt-num {
    font-size: 60px; font-weight: 300; color: #e5e7eb; line-height: 1;
  }
  .spt-title {
    display: inline;
    font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; line-height: 1.4; margin: 0 0 10px;
  }
  .spt-accent { border-left: 2px solid; padding-left: 12px; font-size: 12px; font-style: italic; line-height: 1.65; margin-bottom: 14px; }
  .spt-sub { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #374151; margin-bottom: 8px; }
  .spt-text { font-size: 12px; color: #6b7280; line-height: 1.75; margin-bottom: 14px; }
  .spt-bullets { margin: 0 0 14px; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .spt-bullets li { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; color: #6b7280; line-height: 1.6; }
  .spt-dot { margin-top: 7px; width: 4px; height: 4px; border-radius: 50%; background: #9ca3af; flex-shrink: 0; }
  .spt-section { margin-top: 18px; border-top: 1px solid #f3f4f6; padding-top: 18px; }
  .spt-section-h { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #1f2937; margin-bottom: 8px; }

  /* Mobile: static content, decorative wavy line instead of scroll-reveal motion */
  .spt-wavy { display: block; position: absolute; left: 0; top: 0; bottom: 0; width: 60px; pointer-events: none; overflow: hidden; opacity: 0.18; z-index: 0; }
  .spt-item::before { background: #d1d5db; }

  @media(min-width: 768px) {
    .spt-hero-img { width: 55%; height: 100%; opacity: 1; left: 0; top: 0; bottom: 0; right: auto; }
    .spt-hero-text { position: absolute; right: 0; width: 46%; padding: 0 80px 0 32px; text-align: left; }
    .spt-hero-title { font-size: 42px; }
    .spt-hero-sub { margin: 0; max-width: 400px; }
    .spt-wrap { padding: 0 40px; }
    .spt-item { display: grid; grid-template-columns: 130px 1fr; gap: 0 36px; padding: 56px 0 56px 24px; }
    .spt-num { font-size: 90px; }

    /* Desktop only: scroll-reveal animation (Ecology-page style) */
    .spt-wavy { display: none; }
    .spt-item {
      opacity: 0.48;
      transform: translateY(26px);
      transition: opacity 520ms ease, transform 520ms ease, border-color 520ms ease;
    }
    .spt-item::before {
      transform: scaleY(0.3);
      transform-origin: top;
      opacity: 0;
      transition: transform 520ms ease, opacity 520ms ease, background 520ms ease;
    }
    .spt-item.is-visible {
      opacity: 0.82;
      transform: translateY(0);
    }
    .spt-item.is-active {
      opacity: 1;
      border-color: #bfdbfe;
    }
    .spt-item.is-active::before {
      background: var(--spt-accent, #1d4ed8);
      opacity: 1;
      transform: scaleY(1);
    }
    .spt-num {
      transition: color 520ms ease, transform 520ms ease;
    }
    .spt-item.is-active .spt-num {
      color: color-mix(in srgb, var(--spt-accent, #1d4ed8) 24%, #e5e7eb);
      transform: translateX(4px);
    }
    .spt-title {
      background-image: linear-gradient(transparent 58%, color-mix(in srgb, var(--spt-accent, #1d4ed8) 16%, transparent) 58%);
      background-size: 0% 100%;
      background-repeat: no-repeat;
      transition: background-size 520ms ease, color 520ms ease;
    }
    .spt-item.is-active .spt-title { background-size: 100% 100%; }
  }
  @media(min-width: 1200px) {
    .spt-hero-text { padding: 0 100px 0 40px; }
    .spt-hero-title { font-size: 52px; }
  }
  @media(min-width: 1440px) {
    .spt-hero-title { font-size: 64px; }
    .spt-hero-sub { font-size: 15px; max-width: 520px; }
    .spt-hero-num { font-size: 13px; }
    .spt-hero-text { padding: 0 120px 0 48px; }
    .spt-wrap { padding: 0 60px; }
    .spt-item { grid-template-columns: 160px 1fr; gap: 0 48px; padding: 64px 0 64px 28px; }
    .spt-num { font-size: 110px; }
    .spt-title { font-size: 15px; }
    .spt-text { font-size: 13px; line-height: 1.85; }
    .spt-bullets li { font-size: 13px; }
    .spt-accent { font-size: 13px; }
  }
  @media(min-width: 1920px) {
    .spt-hero-title { font-size: 80px; }
    .spt-hero-sub { font-size: 17px; }
    .spt-num { font-size: 130px; }
    .spt-title { font-size: 17px; }
    .spt-text { font-size: 15px; }
    .spt-bullets li { font-size: 15px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .spt-item,
    .spt-item::before,
    .spt-num,
    .spt-title {
      transition: none;
    }
    .spt-item {
      transform: none;
    }
  }
`;

function Item({ item, index, activeIndex, visibleItems, itemRef }) {
  const itemStyle = { '--spt-accent': item.titleColor || '#1d4ed8' };
  const itemClasses = [
    'spt-item',
    visibleItems.includes(index) ? 'is-visible' : '',
    activeIndex === index ? 'is-active' : '',
  ].filter(Boolean).join(' ');

  return (
    <div ref={itemRef} className={itemClasses} style={itemStyle}>
      <div className="spt-num">{item.num}</div>
      <div>
        <h3 className="spt-title" style={{ color: item.titleColor || '#1d4ed8' }}>{item.title}</h3>
        {item.accent && (
          <blockquote className="spt-accent" style={{ borderColor: item.accentColor || '#dc2626', color: item.accentColor || '#dc2626' }}>
            {item.accent}
          </blockquote>
        )}
        {item.subtitle && <p className="spt-sub">{item.subtitle}</p>}
        {item.description && <p className="spt-text">{item.description}</p>}
        {item.mainText && <p className="spt-text">{item.mainText}</p>}
        {item.bullets?.length > 0 && (
          <ul className="spt-bullets">
            {item.bullets.map((b, i) => (
              <li key={i}><span className="spt-dot" />{b}</li>
            ))}
          </ul>
        )}
        {item.sections?.map((sec, i) => (
          <div key={i} className="spt-section">
            <h4 className="spt-section-h">{sec.heading}</h4>
            {sec.text && <p className="spt-text">{sec.text}</p>}
            {sec.bullets?.length > 0 && (
              <ul className="spt-bullets">
                {sec.bullets.map((b, bi) => (
                  <li key={bi}><span className="spt-dot" />{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicePageTemplate({ hero, items }) {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(() => (
    typeof window !== 'undefined' && 'IntersectionObserver' in window ? [] : items.map((_, index) => index)
  ));

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);

    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((current) => {
          const next = new Set(current);

          entries.forEach((entry) => {
            const index = Number(entry.target.dataset.index);

            if (entry.isIntersecting) {
              next.add(index);
            }
          });

          return [...next].sort((a, b) => a - b);
        });

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            index: Number(entry.target.dataset.index),
            distance: Math.abs(entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - window.innerHeight / 2),
          }))
          .sort((a, b) => a.distance - b.distance);

        if (visibleEntries.length > 0) {
          setActiveIndex(visibleEntries[0].index);
        }
      },
      {
        root: null,
        rootMargin: '-32% 0px -32% 0px',
        threshold: [0.18, 0.35, 0.6],
      }
    );

    itemRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div style={{ width: '100%' }}>
      <style>{css}</style>

      {/* Hero */}
      <section className="spt-hero" style={{ background: hero.bg || 'linear-gradient(135deg,#e8e4de,#d0c9c0)' }}>
        <div className="spt-hero-img">
          <img src={hero.image} alt={hero.title} style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.12))' }} />
        </div>
        <div className="spt-hero-text">
          {hero.tag && (
            <div className="spt-hero-num" style={{ color: hero.tagColor || '#9ca3af' }}>{hero.tag}</div>
          )}
          <h1 className="spt-hero-title" style={{ color: hero.titleColor || '#2d3a8c' }}>{hero.title}</h1>
          <p className="spt-hero-sub" style={{ color: '#6b7280' }}>{hero.subtitle}</p>
        </div>
      </section>

      {/* Content items */}
      <section className="spt-content">
        <div className="spt-wavy" aria-hidden="true">
          <svg viewBox="0 0 60 1000" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }} fill="none">
            <path d="M30 0 C10 100 50 200 30 300 C10 400 50 500 30 600 C10 700 50 800 30 900 C10 950 30 1000 30 1000" stroke="#9ca3af" strokeWidth="1" />
          </svg>
        </div>
        <div className="spt-wrap" style={{ paddingTop: 8, paddingBottom: 60 }}>
          {items.map((item, i) => (
            <Item
              key={i}
              item={item}
              index={i}
              activeIndex={activeIndex}
              visibleItems={visibleItems}
              itemRef={(node) => {
                itemRefs.current[i] = node;
                if (node) node.dataset.index = i;
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
