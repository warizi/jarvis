import { Theme } from "@emotion/react";

export const noteCateItemStyles = {
  li: (isActive: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "14px",
      transition: "background 0s",
      backgroundColor: isActive
        ? theme.colors.primary.light
        : theme.colors.background.deep,
      borderRadius: theme.radius.medium,
      boxShadow: theme.shadow.small,
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
  link: (isActive: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      color: isActive ? "white" : theme.colors.text.primary,
      transition: "none",
      textDecoration: "none",
      width: "100%",
      height: "45px",
      borderRadius: theme.radius.medium,
      "&:hover": {
        background: isActive
          ? theme.colors.primary.normal
          : theme.colors.background.hover,
      },
    } as const),
  span: () => ({
    marginLeft: "10px",
    transition: "none",
  }),
  input: (isActive: boolean) => (theme: Theme) => ({
    marginLeft: "10px",
    border: "none",
    outline: "none",
    background: "none",
    color: isActive ? "white" : theme.colors.text.primary,
    width: "100%",
    "&::placeholder": {
      color: theme.colors.primary.normal,
    },
  }),
};
