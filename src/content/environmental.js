const BASE = {
  heroImage: '/images/Stones/mossy-rock-with-transparent-background_891313-38-Photoroom.png',
  heroTitleGradient: 'linear-gradient(90deg, #847e72, #72ad05, #174900)',
  heroAlign: 'left',
  accentColor: '#15803d',
  heroScrollAnimation: true,
};

export function getEnvironmentalContent(t, lang) {
  const te = t.environmental;

  const PHASE_1  = { label: te.phase1,  color: '#9ca3af' };
  const PHASE_2  = { label: te.phase2,  color: '#a78bfa' };
  const PHASE_3A = { label: te.phase3a, color: '#fb923c' };
  const PHASE_3B = { label: te.phase3b, color: '#2dd4bf' };
  const PHASE_4  = { label: te.phase4,  color: '#f0738a' };

  return {
    ...BASE,
    heroTitleParts: lang === 'en'
      ? [{ text: 'ENVIRONMENTAL WORKS', color: '#16a34a' }]
      : [{ text: 'ЭКОЛОГИЧЕСКИЕ ', color: '#6b7280' }, { text: 'РАБОТЫ', color: '#16a34a' }],
    heroSubtitle: te.heroSubtitle,
    items: [
      {
        num: '01',
        phase: PHASE_1,
        title:    te.item01_title,
        subtitle: te.item01_subtitle,
        duration: te.item01_duration,
        text:     te.item01_text,
      },
      {
        num: '02',
        title:    te.item02_title,
        duration: te.item02_duration,
        text:     te.item02_text,
      },
      {
        num: '03',
        phase:    PHASE_2,
        title:    te.item03_title,
        subtitle: te.item03_subtitle,
        text:     te.item03_text,
        sections: [
          {
            heading: te.item03_sec1_heading,
            bullets: [
              te.item03_sec1_b1, te.item03_sec1_b2, te.item03_sec1_b3,
              te.item03_sec1_b4, te.item03_sec1_b5, te.item03_sec1_b6, te.item03_sec1_b7,
            ],
          },
        ],
      },
      {
        num: '04',
        title:    te.item04_title,
        duration: te.item04_duration,
        text:     te.item04_text,
        bullets: [
          { text: lang === 'en' ? 'Date and venue coordination with LEB' : 'Согласование даты и площадки с МИО', days: '~10 к.д.' },
          { text: lang === 'en' ? 'Publication of notice in newspaper and media' : 'Публикация объявления в газете и СМИ', days: '~4 р.д.' },
          { text: lang === 'en' ? 'Posting notice on portal and boards' : 'Размещение объявления на портале и досках', days: '~23–30 р.д' },
          { text: lang === 'en' ? 'Conducting public hearings' : 'Проведение общественных слушаний', days: '~5 р.д.' },
          { text: lang === 'en' ? 'Processing and posting minutes' : 'Оформление и размещение протокола', days: '~2 р.д.' },
        ],
      },
      {
        num: '05',
        title:    te.item05_title,
        duration: te.item05_duration,
        text:     te.item05_text,
      },
      {
        num: '06',
        title: te.item06_title,
        text:  te.item06_text,
      },
      {
        num: '07',
        phase:    PHASE_3A,
        title:    te.item07_title,
        duration: te.item07_duration,
        accent:   te.item07_accent,
        bullets:  [],
        sections: [
          {
            heading: lang === 'en' ? 'ORGANIZATION AND SUPPORT OF PUBLIC HEARINGS — CONSTRUCTION' : 'ОРГАНИЗАЦИЯ И СОПРОВОЖДЕНИЕ ОБЩЕСТВЕННЫХ СЛУШАНИЙ — СТРОИТЕЛЬСТВО',
            text: lang === 'en'
              ? 'We conduct hearings on the planned construction activities using the same procedure: LEB → notice publication → hearings → minutes. We fully handle all organizational and documentation support.'
              : 'Проводим слушания по намечаемой строительной деятельности по той же процедуре: МИО → публикация объявления → слушания → протокол. Полностью берём на себя организационное и документационное сопровождение.',
            bullets: [
              { text: lang === 'en' ? 'Coordination with LEB' : 'Согласование с МИО', days: '~10 к.д.' },
              { text: lang === 'en' ? 'Publication of notice' : 'Публикация объявления', days: '~23–30 р.д.' },
              { text: lang === 'en' ? 'Conducting hearings' : 'Проведение слушаний', days: '~5 р.д.' },
              { text: lang === 'en' ? 'Processing and posting minutes' : 'Оформление и размещение протокола', days: '~2 р.д.' },
            ],
          },
        ],
      },
      {
        num: '08',
        title:    te.item08_title,
        duration: te.item08_duration,
        text:     te.item08_text,
      },
      {
        num: '09',
        title:    te.item09_title,
        duration: te.item09_duration,
        text:     te.item09_text,
      },
      {
        num: '10',
        phase:   PHASE_3B,
        title:   te.item10_title,
        accent:  te.item10_accent,
        bullets: [],
        sections: [
          {
            heading: lang === 'en' ? 'ORGANIZATION AND SUPPORT OF PUBLIC HEARINGS — OPERATION' : 'ОРГАНИЗАЦИЯ И СОПРОВОЖДЕНИЕ ОБЩЕСТВЕННЫХ СЛУШАНИЙ — ЭКСПЛУАТАЦИЯ',
            text: lang === 'en'
              ? 'We conduct hearings on planned operational activities. The organizational procedure is identical to the previous stages; we conduct it in parallel with the submission of documents for SER.'
              : 'Проводим слушания по намечаемой эксплуатационной деятельности. Организационная процедура аналогична предыдущим этапам; ведём параллельно с подачей документов на ГЭЭ.',
            bullets: [
              { text: lang === 'en' ? 'Coordination with LEB' : 'Согласование с МИО', days: '~10 к.д.' },
              { text: lang === 'en' ? 'Publication of notice in media' : 'Публикация объявления в СМИ', days: '~23–30 р.д.' },
              { text: lang === 'en' ? 'Conducting hearings' : 'Проведение слушаний', days: '~5 р.д.' },
              { text: lang === 'en' ? 'Processing and posting minutes' : 'Оформление и размещение протокола', days: '~2 р.д.' },
            ],
          },
        ],
      },
      {
        num: '11',
        title:    te.item11_title,
        duration: te.item11_duration,
        text:     te.item11_text,
        bullets:  [],
        sections: [
          {
            heading: lang === 'en' ? 'WE DEVELOP AND SUBMIT FOR SER' : 'РАЗРАБАТЫВАЕМ И ПОДАЁМ НА ГЭЭ',
            bullets: [te.item11_b1, te.item11_b2, te.item11_b3, te.item11_b4, te.item11_b5, te.item11_b6, te.item11_b7],
          },
        ],
      },
      {
        num: '12',
        title:    te.item12_title,
        duration: te.item12_duration,
        text:     te.item12_text,
      },
      {
        num: '13',
        phase:   PHASE_4,
        title:   te.item13_title,
        accent:  te.item13_accent,
        bullets: [],
        sections: [
          {
            heading: te.item13_sec1_heading,
            text:    te.item13_sec1_text,
          },
        ],
      },
      {
        num: '14',
        title: te.item14_title,
        text:  te.item14_text,
      },
    ],
    whyItMatters: {
      tag:             te.whyTitle,
      text:            te.whyText,
      circlePosition:  'right',
    },
  };
}
