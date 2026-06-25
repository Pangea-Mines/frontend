import { Link } from 'react-router-dom';
import { footerContent } from '../content/footer';

const columns = [
  [{ key: 'resourceEvaluation', path: '/resource-evaluation' }],
  [{ key: 'laboratory', path: '/laboratory' }],
  [{ key: 'minePlanning', path: '/mine-planning' }],
  [{ key: 'environmental', path: '/environmental' }],
  [
    { key: 'expertise', path: '/permits' },
    { key: 'licensing', path: '/permits' },
    { key: 'projectDesign', path: '/project-design' },
  ],
  [
    { key: 'construction', path: '/commissioning' },
    { key: 'procurement', path: '/commissioning' },
    { key: 'startup', path: '/commissioning' },
  ],
  [{ key: 'commissioning', path: '/commissioning' }],
];

export default function Footer() {
  return (
    <footer className="ftr">
      <style>{`
        .ftr { background: #23232f; color: #fff; padding-top: 48px; }
        .ftr-inner { max-width: 1440px; margin: 0 auto; padding: 0 24px; }

        .ftr-grid { display: grid; grid-template-columns: 1fr; gap: 32px; margin-bottom: 40px; }
        .ftr-brand-name { font-size: 16px; font-weight: 800; letter-spacing: 0.1em; }
        .ftr-brand-tag { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.6; margin-top: 8px; max-width: 220px; }

        .ftr-col-group { display: flex; flex-direction: column; gap: 24px; }
        .ftr-sub h4 {
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: #fff; margin: 0 0 12px; display: inline-block; text-decoration: underline; text-decoration-color: rgba(255,255,255,0.4);
          text-underline-offset: 4px;
        }
        .ftr-sub a.ftr-sub-h { color: #fff; text-decoration: none; }
        .ftr-sub ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .ftr-sub a { font-size: 12px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.15s; }
        .ftr-sub a:hover { color: rgba(255,255,255,0.9); }

        .ftr-bottom {
          border-top: 1px solid rgba(255,255,255,0.12);
          padding: 20px 0; display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ftr-bottom span { font-size: 12px; color: rgba(255,255,255,0.5); display: flex; align-items: center; gap: 6px; }
        .ftr-bottom-links { display: flex; gap: 28px; flex-wrap: wrap; }
        .ftr-bottom-links a { font-size: 12px; color: rgba(255,255,255,0.6); text-decoration: none; }
        .ftr-bottom-links a:hover { color: #fff; }

        @media(min-width: 640px) {
          .ftr-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(min-width: 1024px) {
          .ftr-inner { padding: 0 40px; }
          .ftr-grid { grid-template-columns: 1.1fr repeat(7, 1fr); gap: 20px; }
        }
      `}</style>

      <div className="ftr-inner">
        <div className="ftr-grid">
          <div>
            <div className="ftr-brand-name">{footerContent.brand.name}</div>
            <div className="ftr-brand-tag">{footerContent.brand.tagline}</div>
          </div>

          {columns.map((group, gi) => (
            <div key={gi} className="ftr-col-group">
              {group.map(({ key, path }) => {
                const col = footerContent.columns[key];
                return (
                  <div key={key} className="ftr-sub">
                    <Link to={path} className="ftr-sub-h"><h4>{col.heading}</h4></Link>
                    <ul>
                      {col.links.map((link) => (
                        <li key={link}><Link to={path}>{link}</Link></li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="ftr-bottom">
          <span>© 2026 Pangea PMG. Все права защищены</span>
          <div className="ftr-bottom-links">
            <a href="#">{footerContent.bottom.privacy}</a>
            <a href="#">{footerContent.bottom.terms}</a>
            <a href="#">{footerContent.bottom.contacts}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
