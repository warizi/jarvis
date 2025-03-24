export const formatDate = (
  date: Date | string,
  format: string
) => {
  const target = new Date(date);

  const year = target.getFullYear();
  const month = target.getMonth() + 1;
  const day = target.getDate();
  const hour = target.getHours();
  const minute = target.getMinutes();
  const second = target.getSeconds();

  return format
    .replace(/yyyy/g, year.toString())
    .replace(/MM/g, month.toString().padStart(2, "0"))
    .replace(/dd/g, day.toString().padStart(2, "0"))
    .replace(/HH/g, hour.toString().padStart(2, "0"))
    .replace(/mm/g, minute.toString().padStart(2, "0"))
    .replace(/ss/g, second.toString().padStart(2, "0"));
};
