/** @format */

export const utilityCheckExpirationDateUTC = (timeUTC?: string): boolean => {
  if (!timeUTC) return false;
  const timestamp = new Date(timeUTC);
  return timestamp.getTime() > new Date().getTime();
};
