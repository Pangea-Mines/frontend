const BASE = {
  heroImage: '/images/Stones/copper-ore-with-transparant-background_891313-132-Photoroom.png',
  heroTitleGradient: 'linear-gradient(90deg, #3a3f47, rgba(182,0,0,0.23))',
  heroAlign: 'left',
  accentColor: '#9a2f2f',
  heroScrollAnimation: true,
};

export function getPermitsContent(t, lang) {
  const tp = t.permits;
  return {
    ...BASE,
    heroTitleParts: lang === 'en'
      ? [{ text: 'PERMITS AND STATE EXPERTISE', color: '#9a2f2f' }]
      : [{ text: 'РАЗРЕШЕНИЯ И ГОСЭКСПЕРТИЗА', color: '#9a2f2f' }],
    heroSubtitle: tp.heroSubtitle,
    items: [
      {
        num: '01',
        title: tp.item01_title,
        sections: [
          { heading: tp.item01_sec1_heading, text: tp.item01_sec1_text },
          { heading: tp.item01_sec2_heading, text: tp.item01_sec2_text },
          { heading: tp.item01_sec3_heading, text: tp.item01_sec3_text, note: tp.item01_sec3_note },
        ],
      },
      {
        num: '02',
        title: tp.item02_title,
        sections: [
          { heading: tp.item02_sec1_heading, text: tp.item02_sec1_text },
          { heading: tp.item02_sec2_heading, text: tp.item02_sec2_text },
          { heading: tp.item02_sec3_heading, text: tp.item02_sec3_text },
          { heading: tp.item02_sec4_heading, text: tp.item02_sec4_text },
          { heading: tp.item02_sec5_heading, text: tp.item02_sec5_text },
        ],
      },
      {
        num: '03',
        title: tp.item03_title,
        sections: [
          { heading: tp.item03_sec1_heading, text: tp.item03_sec1_text },
          { heading: tp.item03_sec2_heading, text: tp.item03_sec2_text },
          { heading: tp.item03_sec3_heading, text: tp.item03_sec3_text },
        ],
      },
    ],
    whyItMatters: {
      tag:           tp.whyTitle,
      text:          tp.whyText,
      circlePosition: 'right',
    },
  };
}
