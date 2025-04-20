/** @jsxImportSource @emotion/react */

import { generateMonthData } from "../lib/dateUtils";
import { monthStyles } from "./Month.style";
import MonthHeader from "./MonthHeader";
import Week from "./Week";

type MonthProps = {
  width: string;
  height: string;
  year: number;
  month: number;
};

function Month({ width, height, year, month }: MonthProps) {
  const { container } = monthStyles;
  const monthData = generateMonthData({ year, month });
  return (
    <div css={container({ width, height })}>
      <MonthHeader />
      {monthData.map((week) => (
        <Week key={week[0].date.toString()} data={week} />
      ))}
    </div>
  );
}

export default Month;
