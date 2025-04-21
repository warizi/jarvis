export const formatDate = (
  date: Date | string,
  formatStr: string
): string => {
  const d = new Date(date);

  const pad = (n: number) => String(n).padStart(2, "0");

  const replacements: Record<string, string> = {
    yyyy: String(d.getFullYear()),
    YYYY: String(d.getFullYear()),
    MM: pad(d.getMonth() + 1),
    dd: pad(d.getDate()),
    HH: pad(d.getHours()),
    mm: pad(d.getMinutes()),
    ss: pad(d.getSeconds()),
  };

  return Object.entries(replacements).reduce(
    (acc, [key, value]) => acc.replace(key, value),
    formatStr
  );
};
