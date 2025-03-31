import { Theme } from "@emotion/react";

export const noteCardStyles = {
  container: (theme: Theme) => ({
    // minWidth: "150px",
    width: "200px",
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    overflow: "hidden",
    cursor: "pointer",
    padding: "0 0 10px 0",
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
      padding: "5px 0 0 10px",
    } as const),
  contentDiv: () => ({
    height: "200px",
    padding: "0 5px",
    overflow: "hidden",
  }),
};
