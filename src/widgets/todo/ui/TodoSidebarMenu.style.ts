import { Theme } from "@emotion/react";

export const TodoSidebarMenuStyle = {
  container: () => ({
    minWidth: "200px",
    marginTop: "20px",
  }),
  ul: () =>
    ({
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      marginBottom: "10px",
      // padding: "10px",
    } as const),
  li: (isActive: boolean) => (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: isActive
      ? theme.colors.background.deep
      : "transparent",
    borderRadius: theme.radius.medium,
  }),
  a: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: theme.colors.text.primary,
    textDecoration: "none",
    width: "100%",
    height: "40px",
    borderRadius: theme.radius.medium,
    "&:hover": {
      background: theme.colors.background.hover,
    },
  }),
  span: () => ({
    marginLeft: "10px",
  }),
};
