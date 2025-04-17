import { css, Theme } from "@emotion/react";

export const dateHandlerStyles = {
  container: () =>
    css({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "40px",
    }),
  btnContainer: (theme: Theme) =>
    css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      color: theme.colors.text.primary,
    }),
  btn: (theme: Theme) => ({
    border: "none",
    background: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    color: theme.colors.text.primary,
  }),
  prevBtn: (theme: Theme) =>
    css({
      ...dateHandlerStyles.btn(theme),
      transform: "rotate(180deg)",
    }),
  nextBtn: (theme: Theme) => dateHandlerStyles.btn(theme),
};
