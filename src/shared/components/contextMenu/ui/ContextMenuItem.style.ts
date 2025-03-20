import { Theme } from "@emotion/react";

export const contextMenuItemStyles = {
  container: (theme: Theme) => ({
    width: "100%",
    padding: "5px 10px",
    fontSize: "12px",
    backgroundColor: "transparent",
    color: theme.colors.text.primary,
    cursor: "pointer",
    "&:hover": {
      transition: "none",
      backgroundColor: theme.colors.background.hover,
    },
  }),
};
