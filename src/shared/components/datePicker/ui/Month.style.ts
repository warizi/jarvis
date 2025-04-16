import { css } from "@emotion/react";

export type monthContainerStyleProps = {
  width: string;
  height: string;
};

export const monthStyles = {
  container: ({
    width,
    height,
  }: monthContainerStyleProps) => {
    if (!width || !height) {
      throw new Error("Width and height are required");
    }
    return css({
      width: width,
      height: height,
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "repeat(6, 1fr)",
      gap: "0px",
      justifyItems: "center",
      alignItems: "center",
      padding: "0px",
      margin: "0px",
    });
  },
};
