import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getMinePlanningContent } from '../content/minePlanning';

export default function MinePlanning() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getMinePlanningContent(t, lang)} />;
}
