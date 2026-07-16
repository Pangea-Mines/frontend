import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getLaboratoryContent } from '../content/laboratory';

export default function LaboratoryTesting() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getLaboratoryContent(t, lang)} />;
}
