import { isToday } from "@shared/lib/isToday";
import { MonthType } from "../model/types";

export const getMonthDays = (
  year: number,
  month: number
): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const generateMonthData = (
  currentDate: Date
): MonthType => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay = firstDayOfMonth.getDay(); // Day of week (0: Sun, 1: Mon, ...)
  const endDay = lastDayOfMonth.getDay();

  const daysInMonth = getMonthDays(year, month);
  const daysInPrevMonth = getMonthDays(year, month - 1);

  // Days to show from the previous month
  const prevMonthDays = Array.from(
    { length: startDay },
    (_, i) =>
      new Date(
        year,
        month - 1,
        daysInPrevMonth - startDay + 1 + i
      )
  );

  // Days in the current month
  const currentMonthDays = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(year, month, i + 1)
  );

  // Days to show from the next month
  const nextMonthDays = Array.from(
    { length: 6 - endDay },
    (_, i) => new Date(year, month + 1, i + 1)
  );

  // Combine all days and split into weeks
  const allDays = [
    ...prevMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];
  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(
      allDays.slice(i, i + 7).map((date) => ({
        date,
        isCurrentMonth: date.getMonth() === month,
        isToday: isToday(date),
        isHoliday:
          date.getDay() === 0 || date.getDay() === 6, // Sunday or 1st
        isSun: date.getDay() === 0, // Sunday
        isSat: date.getDay() === 6, // Saturday
        schedules: [], // Placeholder for schedules
      }))
    );
  }

  return weeks;
};
