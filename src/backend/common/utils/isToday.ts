import { formatDate } from "./formatDate"; // moment 기반

export const isToday = (
  date?: Date | string | null
): boolean => {
  if (!date) return false;

  const today = formatDate(new Date(), "yyyy-MM-dd");
  const target = formatDate(date, "yyyy-MM-dd");

  return today === target;
};
