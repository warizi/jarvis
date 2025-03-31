import { Theme } from "@emotion/react";

export const taskNavbarStyles = {
  container: () =>
    ({
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    } as const),
  button: (theme: Theme) =>
    ({
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "9999px",
      cursor: "pointer",
      color: theme.colors.text.secondary,
      border: "none",
      "&:hover": {
        backgroundColor: theme.colors.background.hover,
        color: theme.colors.text.primary,
      },
    } as const),
};
