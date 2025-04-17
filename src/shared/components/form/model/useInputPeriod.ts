import { formatDate } from "@shared/lib/formatDate";
import { useRef, useEffect, useState } from "react";

export const useInputPeriod = (data: Date[]) => {
  const [dates, setDates] = useState<Date[]>(data);
  const [inputText, setInputText] = useState<string>("");
  const [isPickerOpen, setPickerOpen] =
    useState<boolean>(false);

  const inputRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleChange = (date: Date[]) => {
    setDates(date);
  };

  const togglePicker = () => {
    setPickerOpen((prev) => !prev);
  };

  useEffect(() => {
    const startDate = dates[0];
    const endDate = dates[1];

    if (startDate && !endDate) {
      setInputText(formatDate(startDate, "YYYY-MM-DD"));
    } else if (startDate && endDate) {
      setInputText(
        `${formatDate(
          startDate,
          "YYYY-MM-DD"
        )} ~ ${formatDate(endDate, "YYYY-MM-DD")}`
      );
    } else {
      setInputText("");
    }
  }, [dates, data]);

  useEffect(() => {
    if (!isPickerOpen) return;

    const closePicker = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        inputRef.current?.contains(target) ||
        pickerRef.current?.contains(target)
      ) {
        return;
      }
      setPickerOpen(false);
    };

    window.addEventListener("mousedown", closePicker);
    return () =>
      window.removeEventListener("mousedown", closePicker);
  }, [isPickerOpen]);

  return {
    handleChange,
    dates,
    inputText,
    isPickerOpen,
    togglePicker,
    inputRef,
    pickerRef,
  };
};
