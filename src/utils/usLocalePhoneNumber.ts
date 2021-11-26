export const usLocalePhoneNumber = (number: number) => {
  if (typeof number !== "number" || Number.isNaN(number)) return "-";
  return new Intl.NumberFormat("us-US").format(number);
};
