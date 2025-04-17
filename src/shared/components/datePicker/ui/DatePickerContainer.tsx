/** @jsxImportSource @emotion/react */

import { DatePickerProvider } from "../model/useDatePickerContext";
import DatePicker from "./DatePicker";

function DatePickerContainer({
  onChange,
  data = [],
}: {
  onChange?: (date: Date[]) => void;
  data?: Date[];
}) {
  return (
    <DatePickerProvider initialSelectedDates={data}>
      <DatePicker onChange={onChange} />
    </DatePickerProvider>
  );
}

export default DatePickerContainer;
