// import { Theme } from "@emotion/react";

import { Theme } from "@emotion/react";

export const todoItemStyles = {
  container: (isDone: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      minHeight: "45px",
      minWidth: "200px",
      padding: "0 15px 0 0",
      // borderRadius: theme.radius.small,
      backgroundColor: theme.colors.background.deep,
      cursor: "pointer",
      transition: "none",
      overflowY: "hidden",
      color: isDone
        ? theme.colors.text.secondary
        : theme.colors.text.primary,
      "&:hover": {
        backgroundColor: theme.colors.background.hover,
      },
    } as const),
  label: (color: string) => ({
    display: "block",
    width: "8px",
    height: "45px",
    backgroundColor: color,
    marginRight: "5px",
  }),
  titleSpan: (isDone: boolean) => () =>
    ({
      fontSize: "14px",
      height: "16px",
      textDecoration: isDone ? "line-through" : "none",
      whiteSpace: "nowrap",
      overflowY: "hidden",
      textOverflow: "ellipsis",
      display: "inline-block",
      maxWidth: "100%", // 또는 적절한 px 단위
    } as const),
  innerContainer: () =>
    ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexDirection: "row",
    } as const),
  spanDoneDate: (theme: Theme) => ({
    color: theme.colors.text.secondary,
    fontSize: theme.typography.size.small,
    textDecoration: "none !important",
  }),
  todayButton: () => ({
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  }),
};
