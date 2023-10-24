import { useSearchParams } from "react-router-dom";
import * as React from "react";

const formParams = [
  "applicantIncome",
  "coapplicantIncome",
  "creditHistory",
  "genderMale",
  "married",
  "dependents1",
  "dependents2",
  "dependents3plus",
  "educationNotGraduate",
  "selfEmployed",
  "propertyArea",
] as const;

type FormParams = (typeof formParams)[number];

export type FormData = { [x in FormParams]: number };

export function useFormDataFromQueryParams() {
  const [searchParams] = useSearchParams();
  return React.useMemo(() => {
    const obj: Record<string, number> = {};
    formParams.forEach((param) => {
      const valueStr = searchParams.get(param);
      if (!valueStr) {
        throw new Error(`Expected a query param for "${param}" in the URL.`);
      }
      const value = parseInt(valueStr);
      if (isNaN(value)) {
        throw new Error(`Value for query param "${param}" is not a number.`);
      }
      obj[param] = value;
    });
    return obj as Readonly<FormData>;
  }, [searchParams]);
}

function appendFieldsToUrl(urlStr: string, fields: FormData) {
  const url = new URL(urlStr, location.origin);
  Object.entries(fields).forEach(([param, value]) => {
    url.searchParams.append(param, value.toString());
  });
  return url.toString();
}

export const getRecommendationsUrl = (fields: FormData) =>
  appendFieldsToUrl("/personalised-recommendations", fields);
export const getResultsUrl = (fields: FormData) =>
  appendFieldsToUrl("/results", fields);

/** If *all* fields in FormParams are populated with strings that can be parsed as integers, returns FormData, otherwise returns `undefined`. */
export function parseFormData(params: { [x in FormParams]: string | number | undefined }) {
  const loanForm: Partial<FormData> = {};
  for (const key of formParams) {
    const value = params[key];
    const val = parseInt(value?.toString() ?? '');
    if (isNaN(val)) {
      return undefined;
    }
    loanForm[key] = val;
  }
  return loanForm as FormData;
}

/** For testing use only */
export const mockRecommendationFormData = {
  applicantIncome: 100_000,
  coapplicantIncome: 50_000,
  creditHistory: 0,
  genderMale: 0,
  married: 0,
  dependents1: 0,
  dependents2: 0,
  dependents3plus: 0,
  educationNotGraduate: 0,
  selfEmployed: 1,
  propertyArea: 0,
} as const satisfies FormData;

/** For testing use only */
export function generateMockRecommendationsUrl() {
  return getRecommendationsUrl(mockRecommendationFormData);
}
