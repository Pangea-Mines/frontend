const BASE = {
  heroImage: '/images/Stones/Covellite-USA-Photoroom.png',
  heroTitleGradient: 'linear-gradient(90deg, #000000, #3533cd)',
  heroAlign: 'left',
  accentColor: '#4338ca',
  heroScrollAnimation: true,
  letterNav: [
    { letter: 'E', label: 'Engineering' },
    { letter: 'P', label: 'Procurement' },
    { letter: 'C', label: 'Construction Mgmt' },
    { letter: 'M', label: 'Management' },
  ],
};

export function getCommissioningContent(t, lang) {
  const tc = t.epcm;
  return {
    ...BASE,
    heroTitleParts: lang === 'en'
      ? [{ text: 'EPCM MANAGEMENT', color: '#312e81' }]
      : [{ text: 'EPCM-УПРАВЛЕНИЕ', color: '#312e81' }],
    heroSubtitle: tc.heroSubtitle,
    items: [
      {
        num: 'E',
        numLabel: 'Engineering',
        title: tc.e_title,
        sections: [
          {
            heading: tc.e_sec1_heading,
            text:    tc.e_sec1_text,
            bullets: [
              tc.e_sec1_b1, tc.e_sec1_b2, tc.e_sec1_b3, tc.e_sec1_b4, tc.e_sec1_b5,
              tc.e_sec1_b6, tc.e_sec1_b7, tc.e_sec1_b8, tc.e_sec1_b9, tc.e_sec1_b10,
            ],
          },
          {
            divider: true,
            heading: tc.e_sec2_heading,
            text:    tc.e_sec2_text,
            bullets: [tc.e_sec2_b1, tc.e_sec2_b2, tc.e_sec2_b3, tc.e_sec2_b4, tc.e_sec2_b5],
          },
        ],
      },
      {
        num: 'P',
        numLabel: 'Procurement',
        title:   tc.p_title,
        callout: { text: tc.p_callout },
        sections: [
          { heading: tc.p_sec1_heading, text: tc.p_sec1_text },
          {
            heading: tc.p_sec2_heading,
            bullets: [tc.p_sec2_b1, tc.p_sec2_b2, tc.p_sec2_b3, tc.p_sec2_b4],
          },
          {
            heading: tc.p_sec3_heading,
            bullets: [tc.p_sec3_b1, tc.p_sec3_b2, tc.p_sec3_b3, tc.p_sec3_b4],
          },
        ],
      },
      {
        num: 'C',
        numLabel: ['Construction', 'Mgmt'],
        title: tc.c_title,
        sections: [
          {
            heading: tc.c_sec1_heading,
            text:    tc.c_sec1_text,
            callout: { heading: tc.c_callout_heading, text: tc.c_callout_text },
          },
          {
            heading: tc.c_sec2_heading,
            bullets: [tc.c_sec2_b1, tc.c_sec2_b2, tc.c_sec2_b3, tc.c_sec2_b4, tc.c_sec2_b5, tc.c_sec2_b6],
          },
          {
            divider: true,
            heading: tc.c_sec3_heading,
            text:    tc.c_sec3_text,
          },
          {
            heading: tc.c_sec4_heading,
            bullets: [tc.c_sec4_b1, tc.c_sec4_b2, tc.c_sec4_b3, tc.c_sec4_b4],
          },
          {
            heading: tc.c_sec5_heading,
            bullets: [tc.c_sec5_b1, tc.c_sec5_b2, tc.c_sec5_b3, tc.c_sec5_b4],
          },
        ],
      },
      {
        num: 'M',
        numLabel: 'Management',
        title: tc.m_title,
        sections: [
          { heading: tc.m_sec1_heading, text: tc.m_sec1_text },
          {
            heading: tc.m_sec2_heading,
            bullets: [tc.m_sec2_b1, tc.m_sec2_b2, tc.m_sec2_b3, tc.m_sec2_b4, tc.m_sec2_b5, tc.m_sec2_b6],
          },
          {
            divider:  true,
            heading:  tc.m_commissioning_heading,
            subtitle: tc.m_commissioning_subtitle,
            text:     tc.m_commissioning_text,
          },
          { heading: tc.m_c1_heading, text: tc.m_c1_text },
          { heading: tc.m_c2_heading, text: tc.m_c2_text },
          { heading: tc.m_c3_heading, text: tc.m_c3_text },
          { heading: tc.m_c4_heading, text: tc.m_c4_text },
        ],
      },
      {
        num: '',
        numLabel: lang === 'en' ? 'Team' : 'Команда',
        numLabelLarge: true,
        title: tc.team_title,
        cards: [
          { title: tc.team_pto,      text: tc.team_pto_text },
          { title: tc.team_qc,       text: tc.team_qc_text },
          { title: tc.team_geo,      text: tc.team_geo_text },
          { title: tc.team_estimate, text: tc.team_estimate_text },
          { title: tc.team_design,   text: tc.team_design_text },
          { title: tc.team_finance,  text: tc.team_finance_text },
          { title: tc.team_cm,       text: tc.team_cm_text },
          { title: tc.team_igi,      text: tc.team_igi_text },
          { title: tc.team_elec,     text: tc.team_elec_text },
          { title: tc.team_hse,      text: tc.team_hse_text, fullWidth: true },
        ],
      },
    ],
    whyItMatters: {
      text:           tc.whyText,
      circlePosition: 'right',
    },
  };
}
