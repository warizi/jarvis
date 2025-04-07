import { Theme } from "@emotion/react";

export const noteCardStyles = {
  container: (theme: Theme) => ({
    // minWidth: "150px",
    // width: width ? `${width}px` : "200px",
    maxWidth: 350,
    minWidth: 200,
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    overflow: "hidden",
    cursor: "pointer",
    padding: "0 0 10px 0",
    color: theme.colors.text.primary,
    boxShadow: theme.shadow.medium,
    ":hover": {
      backgroundColor: theme.colors.background.hover,
    },
  }),
  label: (color: string) => ({
    width: "100%",
    height: "6px",
    backgroundColor: color,
  }),
  innerContainer: () =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 0 0 10px",
    } as const),
  contentDiv: () => ({
    height: "240px",
    padding: "0 5px",
    overflow: "hidden",
  }),
  titleSpan: () => ({
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    padding: "5px 0",
  }),
};
