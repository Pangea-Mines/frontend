import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getResourceEvaluationContent } from '../content/resourceEvaluation';

export default function ResourceEvaluation() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getResourceEvaluationContent(t, lang)} />;
}
