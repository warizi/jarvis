import { Theme } from "@emotion/react";

export const TodoCateCreateBtnStyle = {
  container: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "10px",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: theme.colors.primary.normal,
    lineHeight: "24px",
    "&:hover": {
      background: theme.colors.background.hover,
    },
  }),
  button: (theme: Theme) => ({
    display: "flex",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: theme.colors.primary.normal,
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
