import { formatDate } from "./formatDate";

export const isToday = (date1?: Date | string | null) => {
  if (!date1) return false;

  return (
    formatDate(date1, "yyyy-MM-dd") ===
    formatDate(new Date(), "yyyy-MM-dd")
  );
};
