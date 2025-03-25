import { Theme } from "@emotion/react";

export const todoFormStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      width: "600px",
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
  label: () =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    } as const),
  input: (isDone: boolean) => (theme: Theme) => ({
    width: "100%",
    marginLeft: "10px",
    outline: "none",
    border: "none",
    fontSize: theme.typography.size.large,
    textDecoration: isDone ? "line-through" : "none",
    backgroundColor: "transparent",
    color: isDone
      ? theme.colors.text.secondary
      : theme.colors.text.primary,
  }),
};
