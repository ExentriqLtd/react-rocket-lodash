/** @format */

import memoize from 'fast-memoize';

export const utilityCheckExpirationDate = memoize(
  (timestamp: number): boolean => {
    const date = Date.now();
    return timestamp > date;
  },
);
