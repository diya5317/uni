import * as React from "react";
import * as ort from "onnxruntime-web";
import { FormData } from "./form_data";

export function useLoanEstimation(fields: FormData | undefined) {
  const [results, setResults] = React.useState<
    ort.InferenceSession.OnnxValueMapType | undefined
  >();

  React.useEffect(() => {
    (async () => {
      const session = await ort.InferenceSession.create("./model.onnx", {
        executionProviders: ["cpu"],
        executionMode: "parallel",
        logVerbosityLevel: 4,
      });

      if (!fields) {
        return;
      }

      console.time("Estimate");
      const results = await session.run({
        X: new ort.Tensor(
          "float64",
          [
            fields.genderMale,
            fields.married,
            fields.educationNotGraduate,
            fields.selfEmployed,
            fields.applicantIncome,
            fields.coapplicantIncome,
            fields.creditHistory,
            fields.propertyArea,
          ],
          [1, 8],
        ),
      });
      console.timeEnd("Estimate");
      setResults(results);
    })().catch((e) => {
      console.error(e);
    });
  }, [fields]);

  if (!results) return undefined;

  const amount = results.variable.data[0] as number;

  if (typeof amount !== "number" || isNaN(amount)) {
    console.error(fields);
    throw new Error(
      "Returned amount from model is not a number: " + amount.toString(),
    );
  }

  const formattedAmount = formatCurrency(amount);

  return { amount, formattedAmount };
}

export const formatCurrency = (amount: number) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });