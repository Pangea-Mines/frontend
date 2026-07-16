import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getEnvironmentalContent } from '../content/environmental';

export default function Environmental() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getEnvironmentalContent(t, lang)} />;
}
