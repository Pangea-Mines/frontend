import { Link } from 'react-router-dom';

const cols = [
  {
    heading: 'Услуги',
    links: ['Оценка ресурсов', 'Лабораторные исследования', 'Горное планирование', 'Экологические работы', 'Проектирование', 'Разрешения и экспертиза'],
  },
  {
    heading: 'Решения',
    links: ['Горнорудные проекты', 'Проектная документация', 'Экологический аудит', 'Государственная экспертиза', 'Ввод в эксплуатацию'],
  },
  {
    heading: 'Ресурсы',
    links: ['Минеральные запасы', 'Горные операции', 'Промышленная безопасность', 'Оценка ресурсов (MRE)', 'Предварительное ТЭО'],
  },
  {
    heading: 'Компания',
    links: ['О нас', 'Проекты', 'Команда', 'Контакты'],
  },
];

const process = [
  { icon: '⬡', label: 'ПРОБА РУДЫ' },
  { icon: '⚗', label: 'ЛАБОРАТОРНЫЕ РАБОТЫ' },
  { icon: '🔬', label: 'ОПЫТНЫЕ ИСПЫТАНИЯ' },
  { icon: '⚙', label: 'ОПТИМИЗАЦИЯ ПРОЦЕССА' },
  { icon: '📋', label: 'ТЕХНОЛОГИЧЕСКИЙ РЕГЛАМЕНТ' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#fff', paddingTop: 60 }}>
      <style>{`
        .footer-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .footer-process { display: flex; flex-direction: column; gap: 20px; }
        .process-flow { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
        .process-step { display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .process-step span { font-size: 9px; letter-spacing: 0.08em; color: #9ca3af; text-align: center; max-width: 80px; }
        .process-arrow { color: #4b5563; font-size: 14px; }
        .footer-cols { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px 20px; }
        .footer-col h4 { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #fff; margin: 0 0 14px; }
        .footer-col a { display: block; font-size: 11px; color: #6b7280; text-decoration: none; margin-bottom: 8px; transition: color 0.15s; }
        .footer-col a:hover { color: #d1d5db; }
        .footer-bottom { border-top: 1px solid #2d2d44; margin-top: 48px; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .footer-bottom span { font-size: 11px; color: #4b5563; }
        @media(min-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 2fr; gap: 60px; }
          .footer-process { justify-content: flex-start; }
          .footer-cols { grid-template-columns: repeat(4, 1fr); gap: 32px; }
        }
        @media(min-width: 1024px) {
          .footer-inner { padding: 0 40px; }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-grid">
          {/* Process flow */}
          <div className="footer-process">
            <span style={{ fontSize: 10, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Процесс работы</span>
            <div className="process-flow">
              {process.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div className="process-step">
                    <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid #2d2d44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                      {step.icon}
                    </div>
                    <span>{step.label}</span>
                  </div>
                  {i < process.length - 1 && <span className="process-arrow">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-cols">
            {cols.map((col) => (
              <div key={col.heading} className="footer-col">
                <h4>{col.heading}</h4>
                {col.links.map((l) => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Pangea PMG</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 11, color: '#4b5563', textDecoration: 'none' }}>Политика конфиденциальности</a>
            <a href="#" style={{ fontSize: 11, color: '#4b5563', textDecoration: 'none' }}>Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
