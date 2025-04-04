import { Theme } from "@emotion/react";

export const noteCardStyles = {
  container: (theme: Theme) => ({
    // minWidth: "150px",
    // width: width ? `${width}px` : "200px",
    maxWidth: 350,
    minWidth: 180,
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    overflow: "hidden",
    cursor: "pointer",
    padding: "0 0 10px 0",
    ":hover": {
      boxShadow: theme.shadow.medium,
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
    height: "200px",
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
