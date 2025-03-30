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
      "&:hover": {
        color: theme.colors.text.primary,
        background: theme.colors.background.hover,
      },
    } as const),
  span: () => ({
    marginLeft: "10px",
    transition: "none",
  }),
  input: (isCurrent: boolean) => (theme: Theme) => ({
    marginLeft: "10px",
    border: "none",
    outline: "none",
    background: "none",
    color: isCurrent ? "white" : theme.colors.text.primary,
    width: "100%",
    "&::placeholder": {
      color: theme.colors.primary.normal,
    },
  }),
};
