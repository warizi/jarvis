import { isToday } from "@shared/lib/isToday";
import { MonthType } from "../model/types";

export const getMonthDays = (
  year: number,
  month: number
): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const generateMonthData = ({
  year,
  month,
}: {
  year: number;
  month: number; // 주의: 1~12 범위로 들어옴
}): MonthType => {
  const zeroBasedMonth = month - 1; // 여기만 고치면 됨

  const firstDayOfMonth = new Date(year, zeroBasedMonth, 1);
  const lastDayOfMonth = new Date(
    year,
    zeroBasedMonth + 1,
    0
  );

  const startDay = firstDayOfMonth.getDay(); // Day of week (0: Sun, 1: Mon, ...)
  const endDay = lastDayOfMonth.getDay();

  const daysInMonth = getMonthDays(year, zeroBasedMonth);
  const daysInPrevMonth = getMonthDays(
    year,
    zeroBasedMonth - 1
  );

  const prevMonthDays = Array.from(
    { length: startDay },
    (_, i) =>
      new Date(
        year,
        zeroBasedMonth - 1,
        daysInPrevMonth - startDay + 1 + i
      )
  );

  const currentMonthDays = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(year, zeroBasedMonth, i + 1)
  );

  const nextMonthDays = Array.from(
    { length: 6 - endDay },
    (_, i) => new Date(year, zeroBasedMonth + 1, i + 1)
  );

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
        isCurrentMonth: date.getMonth() === zeroBasedMonth,
        isToday: isToday(date),
        isHoliday:
          date.getDay() === 0 || date.getDay() === 6,
        isSun: date.getDay() === 0,
        isSat: date.getDay() === 6,
        schedules: [],
      }))
    );
  }

  return weeks;
};

export const getDayString = (date: Date): string => {
  return String(date.getDate()).padStart(2, "0");
};

export const getDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(
    2,
    "0"
  );
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
