import { useLang } from '../context/LangContext';
import { t as tRu } from './rus_translation';
import { t as tEn } from './eng_translation';
import { t as tZh } from './translations.zh';

const tZhMerged = (() => {
  const merged = { ...tEn };
  for (const [key, val] of Object.entries(tZh)) {
    if (val && typeof val === 'object' && merged[key] && typeof merged[key] === 'object') {
      merged[key] = { ...merged[key], ...val };
    } else {
      merged[key] = val;
    }
  }
  return merged;
})();

export function useT() {
  const { lang } = useLang();
  if (lang === 'en') return tEn;
  if (lang === 'zh') return tZhMerged;
  return tRu;
}
