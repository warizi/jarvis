import { css } from "@emotion/react";

export const noteListStyles = {
  container: (isColumn: boolean) =>
    css(
      isColumn
        ? {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            gap: "5px",
            padding: "10px",
          }
        : {
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px",
            padding: "16px",
            width: "100%",
          }
    ),
};
