import { Theme } from "@emotion/react";

export const todoCreateBtnStyles = {
  container: (theme: Theme) =>
    ({
      position: "sticky",
      top: "60px",
      backgroundColor: theme.colors.background.gray,
      zIndex: 1200,
    } as const),
};
