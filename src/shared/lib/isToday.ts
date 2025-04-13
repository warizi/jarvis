import moment from "moment-timezone";

export const isToday = (date1?: Date | string | null) => {
  if (!date1) return false;

  const inputDate = moment.tz(date1, "Asia/Seoul");
  const today = moment.tz("Asia/Seoul");

  return (
    inputDate.format("YYYY-MM-DD") ===
    today.format("YYYY-MM-DD")
  );
};
