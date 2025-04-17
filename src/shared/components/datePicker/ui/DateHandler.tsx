/** @jsxImportSource @emotion/react */

import { ArrowRightIcon } from "@shared/components/icon";
import { dateHandlerStyles } from "./Datehandler.style";
import { useDatePickerContext } from "../model/useDatePickerContext";

function DateHandler() {
  const { container, btnContainer, prevBtn, nextBtn } =
    dateHandlerStyles;
  const { getYear, getMonth, onNextMonth, onPrevMonth } =
    useDatePickerContext();

  return (
    <div css={container}>
      <span>
        {`${getYear()}.${String(getMonth()).padStart(
          2,
          "0"
        )}`}
      </span>
      <div css={btnContainer}>
        <button css={prevBtn} onClick={onPrevMonth}>
          <ArrowRightIcon />
        </button>
        <button css={nextBtn} onClick={onNextMonth}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default DateHandler;
