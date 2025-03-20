import { Theme } from "@emotion/react";

export const todoCateItemStyle = {
  li: (isActive: boolean) => (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    transition: "background 0s",
    backgroundColor: isActive
      ? theme.colors.background.deep
      : "none",
    borderRadius: theme.radius.medium,
    color: theme.colors.text.primary,
    width: "100%",
    "&:last-child": {
      borderBottom: "none",
    },
  }),
  link: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    color: theme.colors.text.primary,
    textDecoration: "none",
    width: "100%",
    height: "40px",
    borderRadius: theme.radius.medium,
    "&:hover": {
      background: theme.colors.background.hover,
    },
  }),
  span: () => ({
    marginLeft: "10px",
  }),
  input: (theme: Theme) => ({
    marginLeft: "10px",
    border: "none",
    outline: "none",
    background: "none",
    color: theme.colors.text.primary,
    width: "100%",
    "&::placeholder": {
      color: theme.colors.primary.normal,
    },
  }),
};
