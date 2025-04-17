import { create } from "zustand";

type DatePickerStore = {
  date: Date;
  selectedDates: Date[];
  onSelectDate: (date: Date) => void;
  resetSelectedDate: () => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  getYear: () => number;
  getMonth: () => number;
  isSelectedDate: (date: Date) => boolean;
};

export const useDatePickerStore = create<DatePickerStore>(
  (set, get) => ({
    date: new Date(),
    selectedDates: [],
    onSelectDate: (date: Date) =>
      set((state) => {
        const exists = state.selectedDates.find((d) =>
          isSameDay(d, date)
        );
        let newDates;

        if (exists) {
          newDates = state.selectedDates.filter(
            (d) => !isSameDay(d, date)
          );
        } else {
          newDates = [...state.selectedDates, date];
          if (newDates.length > 2)
            return {
              selectedDates: [],
            };
        }

        newDates.sort((a, b) => a.getTime() - b.getTime());

        return { selectedDates: newDates };
      }),
    resetSelectedDate: () => set({ selectedDates: [] }),
    onNextMonth: () =>
      set((state) => ({
        date: new Date(
          state.date.getFullYear(),
          state.date.getMonth() + 1
        ),
      })),
    onPrevMonth: () =>
      set((state) => ({
        date: new Date(
          state.date.getFullYear(),
          state.date.getMonth() - 1
        ),
      })),
    getYear: () => get().date.getFullYear(),
    getMonth: () => get().date.getMonth() + 1,
    isSelectedDate: (date: Date) => {
      return get().selectedDates.some((d) =>
        isSameDay(d, date)
      );
    },
  })
);

const isSameDay = (d1: Date, d2: Date) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};
