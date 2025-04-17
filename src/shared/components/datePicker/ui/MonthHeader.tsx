/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

function MonthHeader() {
  return (
    <div
      css={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "16px",
        padding: "10px 0",
        fontSize: "12px",
        fontWeight: "bold",
      })}
    >
      {WEEK.map((day, index) => {
        return (
          <div
            key={index}
            css={css({
              width: "100%",
              textAlign: "center",
            })}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}

export default MonthHeader;
