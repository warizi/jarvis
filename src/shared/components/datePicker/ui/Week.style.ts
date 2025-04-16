import { css } from "@emotion/react";

export const weekStyles = {
  container: () =>
    css({
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gridTemplateRows: "repeat(1, 1fr)",
      gap: "0px",
      justifyItems: "center",
      alignItems: "center",
      padding: "0px",
      margin: "0px",
    }),
};
