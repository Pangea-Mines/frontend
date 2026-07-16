import { Link } from 'react-router-dom';
import { useT } from '../content/useT';
import { footerContent } from '../content/footer';

const PAGE_PATHS = [
  { key: 'company',       path: '/about' },
  { key: 'resources',     path: '/resource-evaluation' },
  { key: 'mining',        path: '/mine-planning' },
  { key: 'laboratory',    path: '/laboratory' },
  { key: 'environmental', path: '/environmental' },
  { key: 'projectDesign', path: '/project-design' },
  { key: 'expertise',     path: '/permits' },
  { key: 'epcm',          path: '/commissioning' },
  { key: 'experience',    path: '/experience' },
];

export default function Footer() {
  const t = useT();
  const pages = PAGE_PATHS.map((p) => ({ ...p, label: t.nav[p.key] }));

  return (
    <footer className="ftr">
      <style>{`
        .ftr { background: #23232f; color: #fff; padding-top: 48px; }
        .ftr-inner { max-width: 1440px; margin: 0 auto; padding: 0 24px; }

        .ftr-grid { display: flex; flex-direction: column; gap: 32px; margin-bottom: 40px; }
        .ftr-brand-name { height: 64px; width: auto; object-fit: contain; filter: brightness(0) invert(1); }
        .ftr-brand-tag { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.6; margin-top: 8px; max-width: 260px; }

        .ftr-pages { display: grid; grid-template-columns: repeat(2, auto); gap: 14px 28px; }
        .ftr-pages a {
          font-size: 12px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase;
          color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.15s;
        }
        .ftr-pages a:hover { color: #fff; }

        .ftr-contacts { font-size: 12px; color: rgba(255,255,255,0.55); line-height: 1.8; flex-shrink: 0; }
        .ftr-contacts-name { color: #fff; font-weight: 700; margin-bottom: 6px; }
        .ftr-contacts a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.15s; }
        .ftr-contacts a:hover { color: #fff; }

        .ftr-bottom {
          padding: 20px 0 32px; display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 12px; text-align: center;
        }
        .ftr-bottom span { font-size: 12px; color: rgba(255,255,255,0.5); display: flex; align-items: center; gap: 6px; }
        .ftr-bottom-links { display: flex; gap: 28px; flex-wrap: wrap; justify-content: center; }
        .ftr-bottom-links a { font-size: 12px; color: rgba(255,255,255,0.6); text-decoration: none; }
        .ftr-bottom-links a:hover { color: #fff; }

        @media(min-width: 1024px) {
          .ftr-inner { padding: 0 40px; }
          .ftr-grid { flex-direction: row; align-items: center; justify-content: space-between; gap: 40px; }
          .ftr-pages { grid-template-columns: repeat(5, auto); max-width: 640px; }
        }
      `}</style>

      <div className="ftr-inner">
        <div className="ftr-grid">
          <div>
            <img className="ftr-brand-name" src="/images/Logo/ChatGPT Image 11 мая 2026 г., 14_49_17 (1).png" alt="PANGEA" />
            <div className="ftr-brand-tag">
              <div>{t.footer.tagline1}</div>
              <div>{t.footer.tagline2}</div>
            </div>
          </div>

          <nav className="ftr-pages">
            {pages.map((page) => (
              <Link key={page.path} to={page.path}>{page.label}</Link>
            ))}
          </nav>

          <div className="ftr-contacts">
            <div className="ftr-contacts-name">{t.footer.company}</div>
            <div>{t.footer.bin}</div>
            <div>{t.footer.address}</div>
            <div>{t.footer.phoneLabel} <a href={footerContent.contacts.phoneHref}>{footerContent.contacts.phone}</a></div>
            <div>{t.footer.emailLabel} <a href={footerContent.contacts.emailHref}>{footerContent.contacts.email}</a></div>
          </div>
        </div>

        <div className="ftr-bottom">
          <span>{t.footer.copyright}</span>
          <div className="ftr-bottom-links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
