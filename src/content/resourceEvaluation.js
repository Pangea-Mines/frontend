const BASE = {
  heroImage: '/images/Stones/64389fe972fa27f845f4deb9bea108b5-Photoroom.png',
  heroTitleGradient: 'linear-gradient(90deg, #471004, #08c5d1)',
  heroAlign: 'left',
  accentColor: '#92400e',
  heroScrollAnimation: true,
};

export function getResourceEvaluationContent(t, lang) {
  const tr = t.resourceEvaluation;
  return {
    ...BASE,
    heroTitleParts: lang === 'en'
      ? [{ text: 'RESOURCE EVALUATION', color: '#14b8a6' }]
      : [{ text: 'ОЦЕНКА ', color: '#7a2e2e' }, { text: 'РЕСУРСОВ', color: '#14b8a6' }],
    heroSubtitle: tr.heroSubtitle,
    items: [
      { num: '01', title: tr.item01_title, text: tr.item01_text, bullets: [] },
      { num: '02', title: tr.item02_title, text: tr.item02_text, bullets: [] },
      { num: '03', title: tr.item03_title, text: tr.item03_text, bullets: [] },
      {
        num: '04',
        title:  tr.item04_title,
        accent: tr.item04_accent,
        text:   tr.item04_text,
        bullets: [],
      },
      {
        num: '05',
        title:    tr.item05_title,
        subtitle: tr.item05_subtitle,
        text:     tr.item05_text,
        bullets:  [],
      },
      {
        num: '06',
        title: tr.item06_title,
        text:  tr.item06_text,
        bullets: [tr.item06_b1, tr.item06_b2, tr.item06_b3, tr.item06_b4, tr.item06_b5],
      },
      {
        num: '07',
        title: tr.item07_title,
        text:  tr.item07_text,
        bullets: [tr.item07_b1, tr.item07_b2, tr.item07_b3],
      },
    ],
    whyItMatters: {
      tag:  tr.whyTitle,
      text: tr.whyText,
    },
  };
}
