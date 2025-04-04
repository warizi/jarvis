import { Theme } from "@emotion/react";

export const todoLabelItemStyles = {
  container: (color: string) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "pointer",
      width: "fit-content",
      height: "22px",
      overflow: "hidden",
      fontSize: theme.typography.size.small,
      borderRadius: theme.radius.small,
      backgroundColor: color,
      padding: "0 8px",
      color: "white",
      fontWeight: 600,
      "&:hover": {
        transform: "scale(1.05)",
        transition: "transform 0.2s ease-in-out",
      },
    } as const),
  label: (color: string) => ({
    width: "8px",
    height: "100%",
    backgroundColor: color,
    marginRight: "5px",
  }),
};
