// import { Theme } from "@emotion/react";

import { Theme } from "@emotion/react";

export const todoItemStyles = {
  container: (isDone: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      minHeight: "45px",
      padding: "0 15px",
      borderRadius: theme.radius.small,
      backgroundColor: theme.colors.background.deep,
      cursor: "pointer",
      transition: "none",
      color: isDone
        ? theme.colors.text.secondary
        : theme.colors.text.primary,
      textDecoration: isDone ? "line-through" : "none",
      // "&:hover": {
      //   backgroundColor: theme.colors.background.hover,
      // },
    } as const),
  spanDoneDate: (theme: Theme) => ({
    color: theme.colors.text.secondary,
    fontSize: theme.typography.size.small,
    textDecoration: "none",
  }),
};
