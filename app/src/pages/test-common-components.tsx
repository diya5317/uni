import { Link } from "common/ui/link";
import { Button } from "common/ui/button";
import { generateMockRecommendationsUrl } from "common/ui/form_data";

export function TestCommonComponentsPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 2</h3>
      <p>
        Here is some text with a <Link to="/">link</Link>
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Button variant="primary" onClick={() => alert("hi")}>
          Primary button
        </Button>
        <Button>Secondary button</Button>
        <Button to="/">Button to internal link</Button>
        <Button to="https://google.com">Button to external link</Button>
        <Button to={generateMockRecommendationsUrl()} variant="primary">
          Recommendations page with example inputs
        </Button>
      </div>
    </div>
  );
}
