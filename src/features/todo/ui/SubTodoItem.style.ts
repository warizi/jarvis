import { Theme } from "@emotion/react";

export const subTodoItemStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      width: "100%",
      gap: "5px",
      padding: "6px",
      backgroundColor: theme.colors.background.gray,
      paddingLeft: "20px",
    } as const),
  input: (theme: Theme) => ({
    backgroundColor: "transparent",
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: theme.colors.text.primary,
  }),
  button: (theme: Theme) =>
    ({
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      cursor: "pointer",
      color: theme.colors.text.secondary,
      borderRadius: theme.radius.small,
      "&:hover": {
        backgroundColor: theme.colors.background.gray,
        color: theme.colors.important.heigh,
      },
    } as const),
};
