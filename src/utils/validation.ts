export const getNumericValue = (val: string) => {
  return val?.replace(/[^0-9]/g, '');
};

// only numeric value get =>
// replace(/\D/g, '');
