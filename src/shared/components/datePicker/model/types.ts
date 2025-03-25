export type DayType = {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isHoliday: boolean;
  isSun: boolean;
  isSat: boolean;
};
export type WeekType = DayType[];
export type MonthType = WeekType[];
