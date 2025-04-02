import { Theme } from "@emotion/react";

export const taskSplitModalTabStyles = {
  container: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    width: "fit-content",
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.large,
    boxShadow: theme.shadow.large,
    padding: "5px 5px",
  }),
  tab: (isActive: boolean) => (theme: Theme) => ({
    width: "100%",
    height: "30px",
    padding: "0 10px",
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
    borderRadius: theme.radius.medium,
  }),
};
