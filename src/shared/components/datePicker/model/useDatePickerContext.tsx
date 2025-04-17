import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

const isSameDay = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

const isRangeIn = (
  start: Date,
  end: Date,
  date: Date
): boolean =>
  date.getTime() > start.getTime() &&
  date.getTime() < end.getTime();

interface DatePickerContextType {
  date: Date;
  selectedDates: Date[];
  onSelectDate: (date: Date) => void;
  resetSelectedDate: () => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  getYear: () => number;
  getMonth: () => number;
  isSelectedDate: (date: Date) => boolean;
  isRange: (date: Date) => {
    right: boolean;
    left: boolean;
  };
}

const DatePickerContext = createContext<
  DatePickerContextType | undefined
>(undefined);

interface DatePickerProviderProps {
  children: ReactNode;
  initialSelectedDates?: Date[];
}

export const DatePickerProvider = ({
  children,
  initialSelectedDates = [],
}: DatePickerProviderProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDates, setSelectedDates] = useState<
    Date[]
  >(initialSelectedDates);

  const onSelectDate = useCallback((selected: Date) => {
    setSelectedDates((prev) => {
      const exists = prev.find((d) =>
        isSameDay(d, selected)
      );
      let newDates: Date[];

      if (exists) {
        newDates = prev.filter(
          (d) => !isSameDay(d, selected)
        );
      } else {
        newDates = [...prev, selected];
        if (newDates.length > 2) return [];
      }

      return newDates.sort(
        (a, b) => a.getTime() - b.getTime()
      );
    });
  }, []);

  const resetSelectedDate = useCallback(
    () => setSelectedDates([]),
    []
  );

  const onNextMonth = useCallback(() => {
    setDate(
      (prev) =>
        new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  }, []);

  const onPrevMonth = useCallback(() => {
    setDate(
      (prev) =>
        new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  }, []);

  const getYear = useCallback(
    () => date.getFullYear(),
    [date]
  );
  const getMonth = useCallback(
    () => date.getMonth() + 1,
    [date]
  );

  const isSelectedDate = useCallback(
    (d: Date) => selectedDates.some((s) => isSameDay(s, d)),
    [selectedDates]
  );

  const isRange = useCallback(
    (d: Date) => {
      if (selectedDates.length < 2)
        return { right: false, left: false };
      const [start, end] = selectedDates;

      if (isRangeIn(start, end, d))
        return { right: true, left: true };
      if (isSameDay(start, d))
        return { right: true, left: false };
      if (isSameDay(end, d))
        return { right: false, left: true };

      return {
        left: isSameDay(start, d),
        right: isSameDay(end, d),
      };
    },
    [selectedDates]
  );

  return (
    <DatePickerContext.Provider
      value={{
        date,
        selectedDates,
        onSelectDate,
        resetSelectedDate,
        onNextMonth,
        onPrevMonth,
        getYear,
        getMonth,
        isSelectedDate,
        isRange,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);
  if (!context) {
    throw new Error(
      "useDatePickerContext must be used within a DatePickerProvider"
    );
  }
  return context;
};
