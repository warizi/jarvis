import { Theme } from "@emotion/react";

export const noteLabelItemStyles = {
  container: (color: string) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "pointer",
      width: "fit-content",
      height: "22px",
      overflow: "hidden",
      fontSize: theme.typography.size.medium,
      borderRadius: theme.radius.small,
      backgroundColor: color,
      padding: "0 8px",
      color: "white",
      fontWeght: 600,
    } as const),
  label: (color: string) => ({
    width: "8px",
    height: "100%",
    backgroundColor: color,
    marginRight: "5px",
  }),
};
