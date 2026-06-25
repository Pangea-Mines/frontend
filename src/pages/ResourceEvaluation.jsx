import DetailPageTemplate from '../components/DetailPageTemplate';
import { resourceEvaluationContent } from '../content/resourceEvaluation';

export default function ResourceEvaluation() {
  return <DetailPageTemplate {...resourceEvaluationContent} />;
}
