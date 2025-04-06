import { Theme } from "@emotion/react";

export const noteHeaderStyle = {
  container: (theme: Theme) =>
    ({
      position: "sticky",
      top: 0,
      display: "flex",
      backgroundColor: theme.colors.background.gray,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 30px",
      height: "60px",
      zIndex: 1200,
    } as const),
  h2: (theme: Theme) => ({
    fontSize: "24px",
    margin: 0,
    color: theme.colors.text.primary,
  }),
  buttonContainer: () =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    } as const),
  button: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
      cursor: "pointer",
      border: "none",
      padding: "8px 16px",
      borderRadius: theme.radius.medium,
      color: theme.colors.text.secondary,
      backgroundColor: theme.colors.background.deep,
      ":hover": {
        backgroundColor: theme.colors.background.hover,
        color: theme.colors.text.primary,
      },
    } as const),
};
