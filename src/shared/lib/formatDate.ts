export const formatDate = (
  date: Date | string,
  format: string
) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();

  return format
    .replace(/yyyy/g, year.toString())
    .replace(/MM/g, month.toString().padStart(2, "0"))
    .replace(/dd/g, day.toString().padStart(2, "0"))
    .replace(/HH/g, hour.toString().padStart(2, "0"))
    .replace(/mm/g, minute.toString().padStart(2, "0"))
    .replace(/ss/g, second.toString().padStart(2, "0"));
};
