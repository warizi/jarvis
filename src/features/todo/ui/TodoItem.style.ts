// import { Theme } from "@emotion/react";

import { Theme } from "@emotion/react";

export const todoItemStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      alignItems: "center",
      minHeight: "45px",
      padding: "0 15px",
      borderRadius: theme.radius.small,
      backgroundColor: theme.colors.background.deep,
      cursor: "pointer",
      transition: "none",
      "&:hover": {
        backgroundColor: theme.colors.background.hover,
      },
    } as const),
};
