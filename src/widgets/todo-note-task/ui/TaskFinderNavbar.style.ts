import { Theme } from "@emotion/react";

export const taskFinderNavbarStyles = {
  container: () =>
    ({
      display: "flex",
      flexDirection: "column",
      padding: "10px 0",
      gap: "10px",
    } as const),
  button: (isActive: boolean) => (theme: Theme) =>
    ({
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "9999px",
      cursor: "pointer",
      backgroundColor: isActive
        ? theme.colors.primary.normal
        : theme.colors.background.gray,
      color: isActive
        ? "white"
        : theme.colors.text.secondary,
      border: "none",
      "&:hover": {
        backgroundColor: isActive
          ? theme.colors.primary.dark
          : theme.colors.background.hover,
        color: isActive
          ? "white"
          : theme.colors.text.primary,
      },
    } as const),
};
