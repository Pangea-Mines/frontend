import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { navContent } from '../content/nav';

const navLinks = [
  { label: navContent.company,       path: '/about' },
  { label: navContent.resources,     path: '/resource-evaluation' },
  { label: navContent.mining,        path: '/mine-planning' },
  { label: navContent.laboratory,    path: '/laboratory' },
  { label: navContent.environmental, path: '/environmental' },
  { label: navContent.projectDesign, path: '/project-design' },
  { label: navContent.expertise,     path: '/permits' },
  { label: navContent.epcm,          path: '/commissioning' },
  { label: navContent.experience,    path: '/experience' },
];

const LANGS = ['RU', 'EN', 'KZ'];

export default function Navbar() {
  const [activeLang, setActiveLang] = useState('RU');
  const [langOpen, setLangOpen]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [isDesktop, setIsDesktop]   = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const fn = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const label = (link) => activeLang === 'EN' ? link.label.en : link.label.ru;

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 52, background: 'rgba(229,231,235,0.28)',
        backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.25)', boxShadow: '0 1px 12px rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16,
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ flexShrink: 0, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.26em', fontSize: 12, fontWeight: 800, color: '#111' }}>
            PANGEA
          </span>
        </NavLink>

        {/* Desktop nav */}
        {isDesktop && (
          <nav style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0, gap: 'clamp(8px, 1.1vw, 22px)', overflow: 'hidden' }}>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === '/'}
                style={({ isActive }) => ({
                  flexShrink: 0, whiteSpace: 'nowrap', textDecoration: 'none',
                  fontSize: 'clamp(7px, 0.54vw, 9px)', letterSpacing: '0.07em',
                  fontWeight: isActive ? 600 : 500, textTransform: 'uppercase',
                  color: isActive ? '#111' : '#9ca3af',
                  paddingBottom: 16, marginTop: 16,
                  borderBottom: isActive ? '2px solid #2d5de0' : '2px solid transparent',
                })}
              >
                {label(link)}
              </NavLink>
            ))}
          </nav>
        )}

        {!isDesktop && <div style={{ flex: 1 }} />}

        {/* Lang dropdown */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <button onClick={() => setLangOpen(!langOpen)} style={{
            display: 'flex', alignItems: 'center', gap: 4, background: 'none',
            border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.1em', color: '#9ca3af',
          }}>
            <svg width="18" height="15" viewBox="0 0 22 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 4h9M5 1v3M6 13s-1-2-2-4.5M10 13s-1-2-2-4.5" />
              <path d="M13 8l3.5-3.5 3.5 3.5M16.5 4.5v8" />
            </svg>
            {activeLang}
            <svg width="7" height="4" viewBox="0 0 7 4" fill="currentColor"><path d="M0 0l3.5 4L7 0H0z" /></svg>
          </button>
          {langOpen && (
            <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: 6, background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', zIndex: 100 }}>
              {LANGS.map((lang) => (
                <button key={lang} onClick={() => { setActiveLang(lang); setLangOpen(false); }} style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '8px 20px',
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', border: 'none', cursor: 'pointer',
                  background: activeLang === lang ? '#111' : '#fff',
                  color: activeLang === lang ? '#fff' : '#555',
                }}>{lang}</button>
              ))}
            </div>
          )}
        </div>

        {/* Globe (desktop) */}
        {isDesktop && (
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" /><path d="M12 3a14.5 14.5 0 010 18M3 12h18" /><path d="M4.5 7.5h15M4.5 16.5h15" />
            </svg>
          </button>
        )}

        {/* Hamburger (mobile) */}
        {!isDesktop && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, flexShrink: 0 }}>
            <span style={{ display: 'block', width: 22, height: 14, position: 'relative' }}>
              {[
                { top: menuOpen ? 6 : 0, transform: menuOpen ? 'rotate(45deg)' : 'none' },
                { top: 6, opacity: menuOpen ? 0 : 1 },
                { top: menuOpen ? 6 : 12, transform: menuOpen ? 'rotate(-45deg)' : 'none' },
              ].map((s, i) => (
                <span key={i} style={{ position: 'absolute', left: 0, width: '100%', height: 1.5, background: '#111', transition: 'all 0.25s', ...s }} />
              ))}
            </span>
          </button>
        )}
      </header>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 52, left: 0, right: 0, bottom: 0, zIndex: 40,
        background: '#fff', overflowY: 'auto',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        <nav style={{ flex: 1, padding: '24px 24px 0' }}>
          {navLinks.map((link, i) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '16px 0', borderBottom: '1px solid #f3f4f6',
                textDecoration: 'none', textTransform: 'uppercase',
                color: isActive ? '#2d5de0' : '#374151',
                fontWeight: isActive ? 600 : 400,
                fontSize: 13, letterSpacing: '0.06em',
              })}
            >
              <span style={{ fontSize: 10, color: '#d1d5db', minWidth: 20 }}>{String(i + 1).padStart(2, '0')}</span>
              {label(link)}
            </NavLink>
          ))}
        </nav>
        <div style={{ padding: '24px', borderTop: '1px solid #f3f4f6' }}>
          <p style={{ fontSize: 10, color: '#9ca3af', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Язык</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {LANGS.map((lang) => (
              <button key={lang} onClick={() => setActiveLang(lang)} style={{
                padding: '8px 16px', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                border: '1px solid', cursor: 'pointer',
                background: activeLang === lang ? '#111' : '#fff',
                color: activeLang === lang ? '#fff' : '#9ca3af',
                borderColor: activeLang === lang ? '#111' : '#e5e7eb',
              }}>{lang}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
