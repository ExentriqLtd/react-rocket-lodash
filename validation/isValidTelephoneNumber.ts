export const utilityIsValidTelephoneNumber = (value: string): boolean => {
  if (!value) return false;
  const regex = /^(?:[0-9]\d*|)$/;
  return regex.test(value);
};
