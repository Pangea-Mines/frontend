import { Link } from 'react-router-dom';

const services = [
  { label: 'ОЦЕНКА РЕСУРСОВ',                        path: '/resource-evaluation', borderColor: '#7c3aed' },
  { label: 'ЛАБОРАТОРНЫЕ ИССЛЕДОВАНИЯ И ОПУ',        path: '/laboratory',          borderColor: '#ea580c' },
  { label: 'ГОРНОЕ ПЛАНИРОВАНИЕ',                    path: '/mine-planning',       borderColor: '#7c3aed' },
  { label: 'ЭКОЛОГИЧЕСКИЕ РАБОТЫ',                   path: '/environmental',       borderColor: '#ea580c' },
  { label: 'ПРОЕКТИРОВАНИЕ И РАБОЧАЯ ДОКУМЕНТАЦИЯ',  path: '/project-design',      borderColor: '#7c3aed' },
  { label: 'РАЗРЕШЕНИЯ И ГОСЭКСПЕРТИЗА',             path: '/permits',             borderColor: '#ea580c' },
  { label: 'ВВОД В ЭКСПЛУАТАЦИЮ',                   path: '/commissioning',       borderColor: '#7c3aed' },
];


export default function Home() {
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

        /* Cards section */
        .home-cards { background: linear-gradient(180deg,#d8d0c8 0%,#e8e2db 100%); padding: 60px 0; }
        .home-cards-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .cards-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .svc-card {
          border-radius: 12px; padding: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          min-height: 140px; text-decoration: none;
          background: rgba(255,255,255,0.55); backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .svc-card:hover { background: rgba(255,255,255,0.75); }
        .svc-card-title { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #1a1a1a; line-height: 1.3; margin: 0; }
        .svc-card-link { font-size: 11px; color: #c75a1a; font-weight: 600; margin-top: 20px; display: flex; align-items: center; gap: 6px; }

        /* About text */
        .home-about { background: #f8f7f5; padding: 60px 24px; }
        .about-inner { max-width: 900px; margin: 0 auto; }
        .about-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #9ca3af; margin-bottom: 16px; }
        .about-h2 { font-size: 22px; font-weight: 700; color: #111; line-height: 1.3; margin: 0 0 16px; }
        .about-p { font-size: 13px; color: #6b7280; line-height: 1.8; margin-bottom: 14px; }

        @media(min-width:768px) {
          .home-hero-text { padding: 0 60px 80px; max-width: 700px; }
          .home-hero-h1 { font-size: 42px; }
          .cards-grid { grid-template-columns: repeat(3,1fr); gap: 20px; }
          .home-cards-inner { padding: 0 40px; }
          .home-about { padding: 80px 40px; }
          .about-h2 { font-size: 30px; }
        }
        @media(min-width:1200px) {
          .home-hero-h1 { font-size: 52px; }
          .cards-grid { grid-template-columns: repeat(4,1fr); }
        }
      `}</style>

      {/* Hero */}
      <section className="home-hero">
        <img src="/images/hero-landscape-desert.jpg" className="home-hero-bg" alt="Landscape" />
        <div className="home-hero-text">
          <h1 className="home-hero-h1">
            <span className="c1">ВАШЕ СТРАТЕГИЧЕСКОЕ </span>
            <span className="c2">ПРЕИМУЩЕСТВО</span>
            <span className="c1"> В РЕАЛИЗАЦИИ </span>
            <span className="c2">ГОРНОРУДНЫХ ПРОЕКТОВ</span>
          </h1>
          <p className="home-hero-sub">
            Полный цикл реализации проектов — геология, исследования, проектирование, согласования, строительство и запуск производства
          </p>
          <Link to="/resource-evaluation" className="home-cta">
            УЗНАТЬ БОЛЬШЕ
            <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
              <path d="M0 5h22M17 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Services cards */}
      <section className="home-cards">
        <div className="home-cards-inner">
          <div className="cards-grid">
            {services.map((svc) => (
              <Link key={svc.path} to={svc.path} className="svc-card" style={{ border: `1.5px solid ${svc.borderColor}` }}>
                <h3 className="svc-card-title">{svc.label}</h3>
                <div className="svc-card-link">
                  Узнать больше
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="home-about">
        <div className="about-inner">
          <div className="about-tag">О компании</div>
          <h2 className="about-h2">Полный инжиниринговый цикл для горнодобывающих проектов</h2>
          <p className="about-p">
            PANGEA — специализированная инжиниринговая компания, предоставляющая полный спектр услуг для реализации горнорудных проектов: от геологической оценки и лабораторных исследований до проектирования, получения разрешений и ввода объектов в эксплуатацию.
          </p>
          <p className="about-p">
            Наша команда объединяет ведущих специалистов в области горного дела, геологии, металлургии, экологии и проектирования. Мы работаем с клиентами по всему миру, обеспечивая соответствие международным стандартам KAZRC, JORC, NI 43-101 и национальным стандартам ГКЗ.
          </p>
        </div>
      </section>
    </div>
  );
}
