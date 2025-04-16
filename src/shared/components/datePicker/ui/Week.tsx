/** @jsxImportSource @emotion/react */

import { getDateString } from "../lib/dateUtils";
import { WeekType } from "../model/types";
import Day from "./Day";
import { weekStyles } from "./Week.style";

type WeekProps = {
  data: WeekType;
};

function Week({ data }: WeekProps) {
  const { container } = weekStyles;
  return (
    <div css={container}>
      {data.map((day) => {
        return (
          <Day key={getDateString(day.date)} data={day} />
        );
      })}
    </div>
  );
}

export default Week;
