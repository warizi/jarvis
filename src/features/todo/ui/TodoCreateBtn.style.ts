import { Theme } from "@emotion/react";

export const todoCreateBtnStyles = {
  container: (theme: Theme) =>
    ({
      position: "sticky",
      top: "60px",
      zIndex: 1200,
      backgroundColor: theme.colors.background.gray,
    } as const),
};
