import { Theme } from "@emotion/react";

export const sidebarItemWrapperStyles = {
  li: () =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "14px",
      transition: "background 0s",
      backgroundColor: "transparent",
      width: "100%",
      "&:last-child": {
        borderBottom: "none",
      },
    } as const),
  innerContainer: () =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
    } as const),
  link: (isCurrent: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      color: isCurrent
        ? theme.colors.text.primary
        : theme.colors.text.secondary,
      transition: "none",
      textDecoration: "none",
      padding: "0 10px",
      width: "100%",
      height: "40px",
      fontSize: "14px",
      backgroundColor: isCurrent
        ? theme.colors.background.gray
        : "transparent",
      "&:hover": {
        color: theme.colors.text.primary,
        background: theme.colors.background.hover,
      },
    } as const),
};
