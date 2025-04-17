/** @jsxImportSource @emotion/react */

import { CalendarIcon } from "@shared/components/icon";
import { inputPeriodStyles } from "./InputPeriod.style";
import { useInputPeriod } from "../model/useInputPeriod";
import { DatePicker } from "@shared/components/datePicker";

function InputPeriod({
  placeholder = "기간 선택",
}: {
  placeholder?: string;
}) {
  const { container, input, pickerContainer } =
    inputPeriodStyles;
  const {
    handleChange,
    inputText,
    isPickerOpen,
    togglePicker,
    inputRef,
  } = useInputPeriod([]);
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
