export function getAboutContent(t) {
  const ta = t.about;
  return {
    tag: ta.tag,
    title: ta.title,
    overviewParagraphs: [ta.overview1, ta.overview2],
    intro: ta.intro,
    whoWeAreTag: ta.whoWeAreTag,
    whoWeAreParagraphs: [ta.whoWeAre1, ta.whoWeAre2, ta.whoWeAre3],
    foundationsTag: ta.foundationsTag,
    foundations: [
      { num: '01', title: ta.foundation1_title, text: ta.foundation1_text, color: '#2563eb' },
      { num: '02', title: ta.foundation2_title, text: ta.foundation2_text, color: '#b45309' },
      { num: '03', title: ta.foundation3_title, text: ta.foundation3_text, color: '#ea580c' },
    ],
    quote: ta.quote,
    quoteAuthor: ta.quoteAuthor,
    whatWeDoTag: ta.whatWeDoTag,
    whatWeDoIntro: ta.whatWeDoIntro,
    services: [
      { title: ta.svc1_title, text: ta.svc1_text, path: '/resource-evaluation', color: '#2563eb' },
      { title: ta.svc2_title, text: ta.svc2_text, path: '/laboratory',          color: '#2563eb' },
      { title: ta.svc3_title, text: ta.svc3_text, path: '/mine-planning',       color: '#2563eb' },
      { title: ta.svc4_title, text: ta.svc4_text, path: '/environmental',       color: '#2563eb' },
      { title: ta.svc5_title, text: ta.svc5_text, path: '/project-design',      color: '#2563eb' },
      { title: ta.svc6_title, text: ta.svc6_text, path: '/permits',             color: '#2563eb' },
    ],
    epcm: {
      title: ta.epcm_title,
      text:  ta.epcm_text,
      path:  '/commissioning',
      color: '#15803d',
    },
    principlesTag: ta.principlesTag,
    principles: [
      { icon: 'target',    title: ta.principle1_title, text: ta.principle1_text },
      { icon: 'search',    title: ta.principle2_title, text: ta.principle2_text },
      { icon: 'link',      title: ta.principle3_title, text: ta.principle3_text },
      { icon: 'precision', title: ta.principle4_title, text: ta.principle4_text },
    ],
  };
}
