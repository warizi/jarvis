import { Theme } from "@emotion/react";

export const noteFormStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "1200px",
      gap: "10px",
      padding: "10px",
      backgroundColor: theme.colors.background.deep,
    } as const),
  input: (theme: Theme) => ({
    width: "100%",
    marginLeft: "10px",
    outline: "none",
    border: "none",
    fontSize: "28px",
    height: "50px",
    backgroundColor: "transparent",
    color: theme.colors.text.primary,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  label: () =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
      alignItems: "center",
      height: "50px",
      borderBottom: "1px solid #eaeaea",
      padding: "10px 0",
    } as const),
};
