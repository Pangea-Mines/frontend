const BASE = {
  heroImage: '/images/Stones/ChatGPT Image 12 мая 2026 г., 14_30_12.png',
  heroTitleGradient: 'linear-gradient(90deg, #a28a5a, #4685c4, #3a546b)',
  heroCreditGradient: 'linear-gradient(90deg, #3a206d, #ff724d)',
  heroAlign: 'left',
  accentColor: '#5a64b8',
  heroScrollAnimation: true,
};

export function getLaboratoryContent(t, lang) {
  const tl = t.laboratory;
  return {
    ...BASE,
    heroCredit: lang === 'en'
      ? [
          { text: 'Branch', color: '#2563eb' },
          { text: 'RSE', color: '#7a2e2e' },
          { text: '«NC CPMRM RK»', color: '#161616' },
          { text: 'SNPOE', color: '#15803d' },
          { text: '«Kazmekhanobr»', color: '#c2680c' },
        ]
      : [
          { text: 'Филиал', color: '#2563eb' },
          { text: 'РГП', color: '#7a2e2e' },
          { text: '«НЦ КПМС РК»', color: '#161616' },
          { text: 'ГНПОПЭ', color: '#15803d' },
          { text: '«Казмеханобр»', color: '#c2680c' },
        ],
    heroTitleLines: lang === 'en'
      ? [
          [{ text: 'ANALYTICAL LABORATORY', color: '#6b6b3a' }],
          [{ text: 'AND INDUSTRIAL', color: '#3b5d7a' }],
          [{ text: 'TESTING', color: '#5b9bd5' }],
        ]
      : [
          [{ text: 'АНАЛИТИЧЕСКАЯ ЛАБОРАТОРИЯ', color: '#6b6b3a' }],
          [{ text: 'И ПРОМЫШЛЕННЫЕ', color: '#3b5d7a' }],
          [{ text: 'ИСПЫТАНИЯ', color: '#5b9bd5' }],
        ],
    heroSubtitle: tl.heroSubtitle,
    items: [
      {
        num: '01',
        title: tl.item01_title,
        bullets: [],
        sections: [
          {
            heading: tl.item01_sec1_heading,
            bullets: [tl.item01_sec1_b1, tl.item01_sec1_b2, tl.item01_sec1_b3, tl.item01_sec1_b4],
          },
          {
            heading: tl.item01_sec2_heading,
            bullets: [tl.item01_sec2_b1, tl.item01_sec2_b2, tl.item01_sec2_b3, tl.item01_sec2_b4, tl.item01_sec2_b5, tl.item01_sec2_b6],
          },
        ],
      },
      {
        num: '02',
        title: tl.item02_title,
        text: [tl.item02_text1, tl.item02_text2],
        bullets: [],
        sections: [
          {
            heading: tl.item02_sec1_heading,
            bullets: [tl.item02_sec1_b1, tl.item02_sec1_b2, tl.item02_sec1_b3, tl.item02_sec1_b4],
          },
          {
            heading: tl.item02_sec2_heading,
            bullets: [tl.item02_sec2_b1, tl.item02_sec2_b2, tl.item02_sec2_b3, tl.item02_sec2_b4],
          },
          {
            heading: tl.item02_sec3_heading,
            bullets: [tl.item02_sec3_b1, tl.item02_sec3_b2, tl.item02_sec3_b3, tl.item02_sec3_b4, tl.item02_sec3_b5],
          },
          {
            heading: tl.item02_sec4_heading,
            bullets: [tl.item02_sec4_b1, tl.item02_sec4_b2, tl.item02_sec4_b3, tl.item02_sec4_b4],
          },
        ],
      },
      {
        num: '03',
        title: tl.item03_title,
        text: tl.item03_text,
        bullets: [],
        sections: [
          {
            heading: tl.item03_sec1_heading,
            bullets: [tl.item03_sec1_b1, tl.item03_sec1_b2, tl.item03_sec1_b3, tl.item03_sec1_b4, tl.item03_sec1_b5, tl.item03_sec1_b6],
          },
        ],
      },
      {
        num: '04',
        title: tl.item04_title,
        text: tl.item04_text,
        bullets: [],
        sections: [
          {
            heading: tl.item04_sec1_heading,
            text:    tl.item04_sec1_text,
          },
        ],
      },
      {
        num: '05',
        title: tl.item05_title,
        text: tl.item05_text,
        bullets: [],
        sections: [
          { heading: tl.item05_sec1_heading, text: tl.item05_sec1_text },
          { heading: tl.item05_sec2_heading, text: tl.item05_sec2_text },
          { heading: tl.item05_sec3_heading, text: tl.item05_sec3_text },
        ],
      },
    ],
    whyItMatters: {
      tagLines: [
        { text: tl.whyTitle1, color: '#7a2e2e' },
        { text: tl.whyTitle2, color: '#2563eb' },
      ],
      text: tl.whyText,
      circlePosition: 'right',
    },
  };
}
