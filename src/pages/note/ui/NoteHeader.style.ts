import { Theme } from "@emotion/react";

export const noteHeaderStyle = {
  container: (theme: Theme) =>
    ({
      position: "sticky",
      top: 0,
      display: "flex",
      backgroundColor: theme.colors.background.gray,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 30px",
      borderBottom: `1px solid ${theme.colors.border.deepGray}`,
      height: "60px",
      zIndex: 1200,
    } as const),
  h2: (theme: Theme) => ({
    fontSize: "24px",
    margin: 0,
    color: theme.colors.text.primary,
  }),
};
