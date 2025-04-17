/** @jsxImportSource @emotion/react */

import { getDayString } from "../lib/dateUtils";
import { DayType } from "../model/types";
import { useDatePickerStore } from "../model/useDatePickerStore";
import { dayStyles } from "./Day.style";

type DayProps = {
  data: DayType;
};

function Day({ data }: DayProps) {
  const { container, innerContainer, span } = dayStyles;
  const { date, isCurrentMonth, isToday, isHoliday } = data;
  const { isSelectedDate, onSelectDate } =
    useDatePickerStore();

  return (
    <div css={container}>
      <div
        css={innerContainer(isSelectedDate(date))}
        onClick={() => onSelectDate(date)}
      >
        <span
          css={span({
            isCurrentMonth,
            isToday,
            isHoliday,
            isSelected: isSelectedDate(date),
          })}
        >
          {getDayString(date)}
        </span>
      </div>
    </div>
  );
}

export default Day;
