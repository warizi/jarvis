import { Theme } from "@emotion/react";

export const todoLabelItemStyles = {
  container: (theme: Theme) =>
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
      backgroundColor: theme.colors.background.deep,
      paddingRight: "5px",
      color: theme.colors.text.primary,
      "& button": {
        display: "none",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        transition: "width 0.3s",
        overflow: "hidden",
        color: theme.colors.background.gray,
        "&:hover": {
          color: "#FF5954",
        },
      },
      "&:hover": {
        "& button": {
          display: "block",
          width: "20px",
        },
      },
    } as const),
  label: (color: string) => ({
    width: "8px",
    height: "100%",
    backgroundColor: color,
    marginRight: "5px",
  }),
};
