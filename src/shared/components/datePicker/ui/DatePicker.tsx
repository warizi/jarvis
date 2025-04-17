/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { useDatePickerStore } from "../model/useDatePickerStore";
import DateHandler from "./DateHandler";
import { datePickerStyles } from "./DatePicker.style";
import Month from "./Month";

type DatePickerProps = {
  onChange?: (date: Date[]) => void;
};

function DatePicker({ onChange }: DatePickerProps) {
  const { container } = datePickerStyles;
  const { getYear, getMonth, selectedDates } =
    useDatePickerStore();

  useEffect(() => {
    if (onChange) {
      onChange(selectedDates);
    }
  }, [onChange, selectedDates]);

  return (
    <div css={container}>
      <DateHandler />
      <Month
        width="100%"
        height="100%"
        year={getYear()}
        month={getMonth()}
      />
    </div>
  );
}

export default DatePicker;
