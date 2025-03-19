import { Theme } from "@emotion/react";

export const todoCateItemStyle = {
  li: (isActive: boolean) => (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.colors.border.gray}`,
    fontSize: "14px",
    backgroundColor: isActive
      ? theme.colors.background.hover
      : "none",
    width: "100%",
    "&:last-child": {
      borderBottom: "none",
    },
  }),
  link: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    color: theme.colors.text.primary,
    textDecoration: "none",
    width: "100%",
    height: "40px",
    "&:hover": {
      background: theme.colors.background.hover,
      color: theme.colors.primary.normal,
    },
  }),
  span: () => ({}),
};
