export const withoutCountryCode = (phone: string) => {
  const trimmed = phone.trim();
  if (trimmed === "") return "-";
  return trimmed.replace(/\+1\s*/, "");
};
