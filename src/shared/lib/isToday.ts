import { formatDate } from "./formatDate";

export const isToday = (date1?: Date | string | null) => {
  if (!date1) return false;

  const date = new Date(date1);
  const today = new Date();

  return (
    formatDate(today, "yyyy-MM-dd") ===
    formatDate(date, "yyyy-MM-dd")
  );
};
