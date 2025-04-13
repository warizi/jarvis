import moment from "moment";

export const formatDate = (
  date: Date | string,
  format: string,
  timezone: string = "Asia/Seoul"
) => {
  return moment.tz(date, timezone).format(format);
};
