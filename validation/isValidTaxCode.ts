/** @format */

import memoize from "fast-memoize";

export const utilityIsValidTaxCode = memoize((taxCode?: string): boolean => {
  if (!taxCode) return false;

  const regex = /^[a-zA-Z]{6}\d\d[a-zA-Z]\d\d[a-zA-Z]\d\d\d[a-zA-Z]/;
  return regex.test(taxCode);
});
