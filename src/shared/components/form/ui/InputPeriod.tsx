/** @jsxImportSource @emotion/react */

import { CalendarIcon } from "@shared/components/icon";
import { inputPeriodStyles } from "./InputPeriod.style";
import { useInputPeriod } from "../model/useInputPeriod";
import { DatePicker } from "@shared/components/datePicker";
import { useEffect, useRef } from "react";

function InputPeriod({
  placeholder = "기간 선택",
  data = [],
  onChange,
}: {
  placeholder?: string;
  data?: Date[];
  onChange?: (date: Date[]) => void;
}) {
  const { container, input, pickerContainer } =
    inputPeriodStyles;
  const {
    handleChange,
    inputText,
    isPickerOpen,
    togglePicker,
    inputRef,
    dates,
  } = useInputPeriod(data);

  const prevRef = useRef<string>("");

  useEffect(() => {
    const current = dates
      .map((d) => d?.toISOString())
      .filter(Boolean)
      .join("|");

    if (prevRef.current !== current) {
      prevRef.current = current;
      if (onChange) onChange(dates);
    }
  }, [dates, onChange]);
  return (
    <div css={container} ref={inputRef}>
      <CalendarIcon size={22} />
      <input
        type="text"
        css={input}
        placeholder={placeholder}
        value={inputText}
        readOnly
        onClick={togglePicker}
      />
      {isPickerOpen && (
        <div css={pickerContainer}>
          <DatePicker onChange={handleChange} />
        </div>
      )}
    </div>
  );
}

export default InputPeriod;
