import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getPermitsContent } from '../content/permits';

export default function Permits() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getPermitsContent(t, lang)} />;
}
