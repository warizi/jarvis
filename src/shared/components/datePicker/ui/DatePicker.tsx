/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import DateHandler from "./DateHandler";
import { datePickerStyles } from "./DatePicker.style";
import Month from "./Month";
import { useDatePickerContext } from "../model/useDatePickerContext";

type DatePickerProps = {
  onChange?: (date: Date[]) => void;
};

function DatePicker({ onChange }: DatePickerProps) {
  const { container } = datePickerStyles;
  const { getYear, getMonth, selectedDates } =
    useDatePickerContext();

  useEffect(() => {
    if (onChange) {
      console.log("onChange", selectedDates);
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
