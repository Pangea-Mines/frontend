import DetailPageTemplate from '../components/DetailPageTemplate';
import { useT } from '../content/useT';
import { useLang } from '../context/LangContext';
import { getProjectDesignContent } from '../content/projectDesign';

export default function ProjectDesign() {
  const t = useT();
  const { lang } = useLang();
  return <DetailPageTemplate {...getProjectDesignContent(t, lang)} />;
}
