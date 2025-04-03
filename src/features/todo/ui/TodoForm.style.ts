import { Theme } from "@emotion/react";

export const todoFormStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      // height: "calc(100vh - 100px)",
      gap: "10px",
      padding: "20px",
      backgroundColor: theme.colors.background.deep,
    } as const),
  innerLabelContainer: () => ({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  }),
  todoLabel: (color: string) => ({
    width: "8px",
    height: "100%",
    backgroundColor: color,
    marginRight: "5px",
  }),
  label: () =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
    } as const),
  input: (isDone: boolean) => (theme: Theme) => ({
    width: "100%",
    marginLeft: "10px",
    outline: "none",
    border: "none",
    fontSize: theme.typography.size.large,
    textDecoration: isDone ? "line-through" : "none",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: isDone
      ? theme.colors.text.secondary
      : theme.colors.text.primary,
  }),
};
