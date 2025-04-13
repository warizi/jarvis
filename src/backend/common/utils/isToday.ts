import { formatDate } from "./formatDate"; // moment 기반

export const isToday = (
  date?: Date | string | null
): boolean => {
  if (!date) return false;

  const today = formatDate(
    new Date(),
    "YYYY-MM-DD",
    "Asia/Seoul"
  );
  const target = formatDate(
    date,
    "YYYY-MM-DD",
    "Asia/Seoul"
  );

  return today === target;
};
