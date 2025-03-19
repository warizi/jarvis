import { Theme } from "@emotion/react";

export const todoCateListStyle = {
  container: (theme: Theme) => ({
    // border: `1px solid ${theme.colors.border.deepGray}`,
    borderRadius: theme.radius.medium,
  }),
  ul: () => ({
    listStyle: "none",
    padding: 0,
    margin: 0,
    minWidth: "200px",
  }),
  h3: (theme: Theme) => ({
    fontSize: "12px",
    margin: "0 0 10px 0",
    borderBottom: `1px solid ${theme.colors.border.deepGray}`,
    padding: "10px 0",
  }),
};
