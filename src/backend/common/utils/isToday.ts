import { formatDate } from "./formatDate";

export const isToday = (date?: Date | string | null) => {
  if (!date) return false;
  const today = new Date();
  const target = new Date(date);

  return (
    formatDate(today, "yyyy-MM-dd") ===
    formatDate(target, "yyyy-MM-dd")
  );
};
