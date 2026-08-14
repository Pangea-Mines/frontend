const BASE = {
  heroImage: '/images/Stones/CH1229f-Photoroom.png',
  heroTitleGradient: 'linear-gradient(90deg, #645330, #419eff, #007dff)',
  heroAlign: 'left',
  accentColor: '#3b4f8c',
  heroScrollAnimation: true,
};

export function getMinePlanningContent(t, lang) {
  const tm = t.minePlanning;
  return {
    ...BASE,
    heroTitleParts: lang === 'en'
      ? [{ text: 'MINE PLANNING', color: '#5b7290' }]
      : [{ text: 'ПЛАН ', color: '#a9863c' }, { text: 'ГОРНЫХ РАБОТ', color: '#5b7290' }],
    heroSubtitle: tm.heroSubtitle,
    items: [
      {
        num: '01',
        title: tm.item01_title,
        text:  tm.item01_text,
        bullets: [
          tm.item01_b1, tm.item01_b2, tm.item01_b3, tm.item01_b4,
          tm.item01_b5, tm.item01_b6, tm.item01_b7,
        ],
      },
      {
        num: '02',
        title: tm.item02_title,
        text:  tm.item02_text,
        bullets: [],
        sections: [
          {
            heading: tm.item02_sec1_heading,
            bullets: [tm.item02_sec1_b1, tm.item02_sec1_b2, tm.item02_sec1_b3, tm.item02_sec1_b4, tm.item02_sec1_b5],
          },
          {
            heading: tm.item02_sec2_heading,
            bullets: [tm.item02_sec2_b1, tm.item02_sec2_b2, tm.item02_sec2_b3, tm.item02_sec2_b4, tm.item02_sec2_b5, tm.item02_sec2_b6],
          },
        ],
      },
      { num: '03', title: tm.item03_title, text: tm.item03_text, bullets: [] },
      { num: '04', title: tm.item04_title, text: tm.item04_text, bullets: [] },
      { num: '05', title: tm.item05_title, text: tm.item05_text, bullets: [] },
      { num: '06', title: tm.item06_title, text: tm.item06_text, bullets: [] },
      {
        num: '07',
        title: tm.item07_title,
        bullets: [tm.item07_b1, tm.item07_b2, tm.item07_b3, tm.item07_b4, tm.item07_b5],
      },
      {
        num: '08',
        title: tm.item08_title,
        text:  tm.item08_text,
        bullets: [
          tm.item08_b1, tm.item08_b2, tm.item08_b3, tm.item08_b4, tm.item08_b5,
          tm.item08_b6, tm.item08_b7, tm.item08_b8, tm.item08_b9, tm.item08_b10,
        ],
      },
      {
        num: '09',
        title: tm.item09_title,
        text:  tm.item09_text,
        bullets: [tm.item09_b1, tm.item09_b2],
      },
    ],
  };
}
