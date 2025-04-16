/** @jsxImportSource @emotion/react */

import { getDayString } from "../lib/dateUtils";
import { DayType } from "../model/types";
import { dayStyles } from "./Day.style";

type DayProps = {
  data: DayType;
};

function Day({ data }: DayProps) {
  const { container, innerContainer, span } = dayStyles;
  const { date, isCurrentMonth, isToday, isHoliday } = data;

  return (
    <div css={container}>
      <div css={innerContainer(false)}>
        <span
          css={span({
            isCurrentMonth,
            isToday,
            isHoliday,
            isSelected: false,
          })}
        >
          {getDayString(date)}
        </span>
      </div>
    </div>
  );
}

export default Day;
