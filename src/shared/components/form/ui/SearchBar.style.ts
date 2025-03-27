import { Theme } from "@emotion/react";

export const searchBarStyles = {
  container: (theme: Theme) =>
    ({
      maxWidth: "500px",
      height: "35px",
      backgroundColor: theme.colors.background.gray,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "20px",
      border: `1px solid ${theme.colors.border.deepGray}`,
      overflow: "hidden",
    } as const),
  input: (theme: Theme) => ({
    width: "100%",
    height: "35px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: theme.colors.text.primary,
    fontSize: theme.typography.size.medium,
  }),
  button: (theme: Theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    backgroundColor: "transparent",
    color: theme.colors.text.secondary,
    cursor: "pointer",
    "&:hover": {
      color: theme.colors.text.primary,
    },
  }),
  resetButton: (theme: Theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    backgroundColor: "transparent",
    color: theme.colors.text.secondary,
    cursor: "pointer",
    "&:hover": {
      color: theme.colors.text.primary,
    },
  }),
};
