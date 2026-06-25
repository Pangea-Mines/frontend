import DetailPageTemplate from '../components/DetailPageTemplate';
import { permitsContent } from '../content/permits';

export default function Permits() {
  return <DetailPageTemplate {...permitsContent} />;
}
