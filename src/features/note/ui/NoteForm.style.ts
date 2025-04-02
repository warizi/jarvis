import { Theme } from "@emotion/react";

export const noteFormStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: "10px",
      padding: "10px",
      backgroundColor: theme.colors.background.deep,
    } as const),
  input: (theme: Theme) => ({
    width: "100%",
    marginLeft: "10px",
    outline: "none",
    border: "none",
    fontSize: theme.typography.size.large,
    backgroundColor: "transparent",
    color: theme.colors.text.primary,
  }),
  label: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
      borderBottom: `1px solid ${theme.colors.border.deepGray}`,
      padding: "10px 0",
    } as const),
};
