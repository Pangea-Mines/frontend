import { useLang } from '../context/LangContext';
import { t as tRu } from './rus_translation';
import { t as tEn } from './eng_translation';

export function useT() {
  const { lang } = useLang();
  return lang === 'en' ? tEn : tRu;
}
