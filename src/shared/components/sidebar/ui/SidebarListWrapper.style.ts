import { Theme } from "@emotion/react";

export const sidebarListWrapperStyles = {
  container: () =>
    ({
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
    } as const),
  ul: () =>
    ({
      display: "flex",
      flexDirection: "column",
      listStyleType: "none",
      padding: 0,
      margin: 0,
    } as const),
  listTitleContainer: (theme: Theme) =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "30px",
      color: theme.colors.text.secondary,
      fontSize: theme.typography.size.small,
    } as const),
  buttonStyle: (theme: Theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: theme.colors.text.secondary,
    borderRadius: theme.radius.small,
    padding: 0,
    transition: "background 0s color 0s",
    "&:hover": {
      color: theme.colors.text.primary,
      backgroundColor: theme.colors.background.hover,
    },
  }),
};
