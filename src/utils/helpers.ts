export const roundNumber = (value: number): number => {
  return Number(value.toFixed(1));
};

export const formatRuntime = (runtime: number): string => {
  return `${Math.floor(runtime / 60)} ч ${runtime % 60} мин`;
};

export const firstLetterToUpperCase = (text: string): string => {
  if (typeof text !== "string" || !text.trim()) return "";
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const formatCurrencyUSD = (value: string): string => {
  const num = +value;

  return (
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(num) + " $"
  );
};

export const validateResponse = async (
  response: Response
): Promise<Response> => {
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response;
};