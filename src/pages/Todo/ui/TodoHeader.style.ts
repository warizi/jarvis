import { Theme } from "@emotion/react";

export const todoHeaderStyle = {
  container: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    borderBottom: `1px solid ${theme.colors.border.deepGray}`,
    height: "50px",
  }),
  h2: (theme: Theme) => ({
    fontSize: "24px",
    margin: 0,
    color: theme.colors.text.primary,
  }),
};
