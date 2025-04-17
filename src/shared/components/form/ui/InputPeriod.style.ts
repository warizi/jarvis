import { css, Theme } from "@emotion/react";

export const inputPeriodStyles = {
  container: (theme: Theme) =>
    css({
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "5px",
      width: "100%",
      height: "40px",
      padding: "0 10px",
      color: theme.colors.text.primary,
      backgroundColor: theme.colors.background.deep,
      borderRadius: theme.radius.medium,
    }),
  input: (theme: Theme) =>
    css({
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.background.deep,
      color: theme.colors.text.primary,
      outline: "none",
      border: "none",
    }),
  pickerContainer: () =>
    css({
      position: "absolute",
      top: "100%",
      left: "30px",
      width: "fit-content",
      height: "fit-content",
      zIndex: 15000,
    }),
};
