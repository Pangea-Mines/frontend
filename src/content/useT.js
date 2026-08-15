import { useLang } from '../context/LangContext';
import { t as tRu } from './rus_translation';
import { t as tEn } from './eng_translation';
import { t as tZh } from './translations.zh';

const tZhMerged = { ...tEn, ...tZh };

export function useT() {
  const { lang } = useLang();
  if (lang === 'en') return tEn;
  if (lang === 'zh') return tZhMerged;
  return tRu;
}
