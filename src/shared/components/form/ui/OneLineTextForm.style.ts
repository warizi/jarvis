import { Theme } from "@emotion/react";

export const sizeStyles = {
  sm: {
    height: "24px",
    fontSize: "14px",
    icon: 20,
  },
  md: {
    height: "32px",
    fontSize: "16px",
    icon: 30,
  },
};

export const oneLineTextFormStyle = {
  container: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "10px",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: theme.colors.primary.normal,
    "&:hover": {
      background: theme.colors.background.hover,
    },
  }),
  button: (theme: Theme) => ({
    display: "flex",
    border: "none",
    borderRadius: theme.radius.small,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: theme.colors.primary.normal,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.colors.background.hover,
    },
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
