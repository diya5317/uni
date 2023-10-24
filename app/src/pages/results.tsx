import { Button } from "common/ui/button";
import {
  getRecommendationsUrl,
  useFormDataFromQueryParams,
} from "common/ui/form_data.tsx";
import { useLoanEstimation } from "common/ui/loan_estimation";
import { PageWrapper } from "common/ui/page_wrapper";
import "common/ui/component-wrapper.css";

export function Results() {
  const formData = useFormDataFromQueryParams();
  const result = useLoanEstimation(formData);

  return (
    <PageWrapper>
      <div className="component-wrapper">
        <h2>You can borrow up to</h2>
        <h2 style={{ color: "#42A7D5", fontSize: 68 }}>
          {result?.formattedAmount}
        </h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Button to="/loan-form">Recalculate</Button>
          <Button variant="primary" to={getRecommendationsUrl(formData)}>
            See my Personalised Recommendations
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
