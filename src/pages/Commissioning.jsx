import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getCommissioningContent } from '../content/commissioning';

export default function Commissioning() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getCommissioningContent(t, lang)} />;
}
