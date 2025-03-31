import { Theme } from "@emotion/react";

export const taskSplitModalTabStyles = {
  container: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    width: "200px",
    height: "50px",
    backgroundColor: theme.colors.background.gray,
    borderRadius: theme.radius.large,
    boxShadow: theme.shadow.medium,
    padding: "0 10px",
  }),
  tab: (isActive: boolean) => (theme: Theme) => ({
    width: "100%",
    height: "40px",
    backgroundColor: isActive
      ? theme.colors.primary.normal
      : theme.colors.background.deep,
    color: isActive ? "white" : theme.colors.text.secondary,
    cursor: "pointer",
    ":hover": {
      color: isActive ? "white" : theme.colors.text.primary,
      backgroundColor: isActive
        ? theme.colors.primary.dark
        : theme.colors.background.hover,
    },
    border: "none",
    borderRadius: theme.radius.small,
    padding: "0",
  }),
};
