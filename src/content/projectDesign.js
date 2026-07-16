export function getProjectDesignContent(t, lang) {
  const tpd = t.projectDesign;
  const PHASE_1 = { label: tpd.phase1, color: '#9ca3af' };
  const PHASE_2 = { label: tpd.phase2, color: '#a78bfa' };
  const PHASE_3 = { label: tpd.phase3, color: '#fb923c' };

  return {
    heroImage: '/images/Stones/47857-97-Photoroom.png',
    heroTitleLines: lang === 'en'
      ? [
          [{ text: 'PROJECT DESIGN AND', color: '#7a2e2e' }],
          [{ text: 'WORKING DOCUMENTATION', color: '#3b3f8c' }],
        ]
      : [
          [{ text: 'ПРОЕКТИРОВАНИЕ И', color: '#7a2e2e' }],
          [{ text: 'РАБОЧАЯ ДОКУМЕНТАЦИЯ', color: '#3b3f8c' }],
        ],
    heroTitleGradient: 'linear-gradient(90deg, #683008, rgba(1,41,213,0.23))',
    heroSubtitle: tpd.heroSubtitle,
    heroAlign: 'left',
    accentColor: '#1d4ed8',
    heroScrollAnimation: true,

    overviewButton: { label: tpd.overviewBtn, path: '/experience' },

    items: [
      {
        num: '01',
        phase: PHASE_1,
        title: tpd.item01_title,
        subtitle: tpd.item01_subtitle,
        text: tpd.item01_text,
        bullets: [tpd.item01_b1, tpd.item01_b2, tpd.item01_b3, tpd.item01_b4, tpd.item01_b5, tpd.item01_b6, tpd.item01_b7, tpd.item01_b8],
      },
      {
        num: '02',
        title: tpd.item02_title,
        subtitle: tpd.item02_subtitle,
        bullets: [tpd.item02_b1, tpd.item02_b2, tpd.item02_b3, tpd.item02_b4, tpd.item02_b5, tpd.item02_b6, tpd.item02_b7, tpd.item02_b8, tpd.item02_b9, tpd.item02_b10, tpd.item02_b11, tpd.item02_b12, tpd.item02_b13, tpd.item02_b14, tpd.item02_b15, tpd.item02_b16, tpd.item02_b17],
      },
      {
        num: '03',
        phase: PHASE_2,
        title: tpd.item03_title,
        subtitle: tpd.item03_subtitle,
        text: tpd.item03_text,
        bullets: [tpd.item03_b1, tpd.item03_b2, tpd.item03_b3, tpd.item03_b4, tpd.item03_b5, tpd.item03_b6, tpd.item03_b7, tpd.item03_b8, tpd.item03_b9, tpd.item03_b10],
      },
      {
        num: '04',
        title: tpd.item04_title,
        accent: tpd.item04_accent,
        accentColor: '#dc2626',
        sections: [
          {
            heading: tpd.item04_s1_heading,
            text: tpd.item04_s1_text,
            bullets: [tpd.item04_s1_b1, tpd.item04_s1_b2, tpd.item04_s1_b3, tpd.item04_s1_b4],
          },
          {
            heading: tpd.item04_s2_heading,
            text: tpd.item04_s2_text,
            bullets: [tpd.item04_s2_b1, tpd.item04_s2_b2, tpd.item04_s2_b3, tpd.item04_s2_b4],
          },
          { heading: tpd.item04_s3_heading, text: tpd.item04_s3_text },
          { heading: tpd.item04_s4_heading, text: tpd.item04_s4_text },
        ],
      },
      {
        num: '05',
        title: tpd.item05_title,
        subtitle: tpd.item05_subtitle,
        sections: [
          {
            heading: tpd.item05_s1_heading,
            bullets: [tpd.item05_s1_b1, tpd.item05_s1_b2, tpd.item05_s1_b3, tpd.item05_s1_b4, tpd.item05_s1_b5, tpd.item05_s1_b6, tpd.item05_s1_b7, tpd.item05_s1_b8],
          },
          {
            heading: tpd.item05_s2_heading,
            bullets: [tpd.item05_s2_b1, tpd.item05_s2_b2, tpd.item05_s2_b3, tpd.item05_s2_b4, tpd.item05_s2_b5],
          },
        ],
      },
      {
        num: '06',
        title: tpd.item06_title,
        subtitle: tpd.item06_subtitle,
        accent: tpd.item06_accent,
        accentColor: '#dc2626',
        text: tpd.item06_text,
        bullets: [tpd.item06_b1, tpd.item06_b2, tpd.item06_b3, tpd.item06_b4, tpd.item06_b5],
      },
      {
        num: '07',
        phase: PHASE_3,
        title: tpd.item07_title,
        subtitle: tpd.item07_subtitle,
        sections: [
          { heading: tpd.item07_s1_heading, text: tpd.item07_s1_text },
          {
            heading: tpd.item07_s2_heading,
            text: tpd.item07_s2_text,
            bullets: [tpd.item07_s2_b1, tpd.item07_s2_b2, tpd.item07_s2_b3, tpd.item07_s2_b4],
          },
          { heading: tpd.item07_s3_heading, text: tpd.item07_s3_text },
        ],
      },
      {
        num: '08',
        title: tpd.item08_title,
        accent: tpd.item08_accent,
        accentColor: '#2563eb',
        sections: [
          { heading: tpd.item08_s1_heading, text: tpd.item08_s1_text },
          {
            badge: { label: tpd.item08_s2_badge, color: '#92400e' },
            heading: tpd.item08_s2_heading,
            text: tpd.item08_s2_text,
            bullets: [tpd.item08_s2_b1, tpd.item08_s2_b2, tpd.item08_s2_b3, tpd.item08_s2_b4, tpd.item08_s2_b5],
          },
          {
            badge: { label: tpd.item08_s3_badge, color: '#92400e' },
            heading: tpd.item08_s3_heading,
            text: tpd.item08_s3_text,
            subsections: [
              { heading: tpd.item08_s3_sub1_heading, text: tpd.item08_s3_sub1_text },
              { heading: tpd.item08_s3_sub2_heading, text: tpd.item08_s3_sub2_text },
              { heading: tpd.item08_s3_sub3_heading, text: tpd.item08_s3_sub3_text },
            ],
          },
          {
            badge: { label: tpd.item08_s4_badge, color: '#92400e' },
            heading: tpd.item08_s4_heading,
            text: tpd.item08_s4_text,
            subsections: [
              { heading: tpd.item08_s4_sub1_heading, text: tpd.item08_s4_sub1_text },
              { heading: tpd.item08_s4_sub2_heading, text: tpd.item08_s4_sub2_text },
              { heading: tpd.item08_s4_sub3_heading, text: tpd.item08_s4_sub3_text },
            ],
          },
          {
            badge: { label: tpd.item08_s5_badge, color: '#92400e' },
            heading: tpd.item08_s5_heading,
            text: tpd.item08_s5_text,
            subsections: [
              { heading: tpd.item08_s5_sub1_heading, text: tpd.item08_s5_sub1_text },
              { heading: tpd.item08_s5_sub2_heading, text: tpd.item08_s5_sub2_text },
            ],
          },
          {
            badge: { label: tpd.item08_s6_badge, color: '#92400e' },
            heading: tpd.item08_s6_heading,
            text: tpd.item08_s6_text,
            subsections: [
              { heading: tpd.item08_s6_sub1_heading, text: tpd.item08_s6_sub1_text },
              { heading: tpd.item08_s6_sub2_heading, text: tpd.item08_s6_sub2_text },
            ],
          },
          {
            badge: { label: tpd.item08_s7_badge, color: '#92400e' },
            heading: tpd.item08_s7_heading,
            text: tpd.item08_s7_text,
            subsections: [
              { heading: tpd.item08_s7_sub1_heading, text: tpd.item08_s7_sub1_text },
              { heading: tpd.item08_s7_sub2_heading, text: tpd.item08_s7_sub2_text },
            ],
          },
        ],
      },
    ],

    whyItMatters: {
      tag: tpd.whyTitle,
      text: tpd.whyText,
      circlePosition: 'right',
    },
  };
}
