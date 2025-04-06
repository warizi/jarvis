import { Theme } from "@emotion/react";

export const labelSelectorStyles = {
  container: (theme: Theme) =>
    ({
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
    } as const),
  input: (theme: Theme) =>
    ({
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.background.deep,
      color: theme.colors.text.primary,
      outline: "none",
      border: "none",
    } as const),
  dropdown: (theme: Theme) =>
    ({
      position: "absolute",
      top: "calc(100% + 10px)",
      left: 0,
      width: "100%",
      padding: "10px",
      backgroundColor: theme.colors.background.deep,
      borderRadius: theme.radius.medium,
      boxShadow: theme.shadow.medium,
      zIndex: 1,
    } as const),
  labelItem: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "30px",
      gap: "10px",
      padding: " 0 10px",
      cursor: "pointer",
      width: "100%",
      fontSize: theme.typography.size.medium,
      // "&:hover": {
      //   backgroundColor: theme.colors.background.hover,
      // },
    } as const),
  labelColor: (color: string) => () =>
    ({
      width: "15px",
      height: "15px",
      borderRadius: "5px",
      backgroundColor: color,
    } as const),
};
