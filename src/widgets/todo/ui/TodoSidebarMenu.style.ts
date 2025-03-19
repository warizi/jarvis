import { Theme } from "@emotion/react";

export const TodoSidebarMenuStyle = {
  container: () => ({
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
  li: () => ({
    display: "flex",
    alignItems: "center",
  }),
  a: (isActive: boolean) => (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: theme.colors.text.primary,
    textDecoration: "none",
    width: "100%",
    height: "40px",
    backgroundColor: isActive
      ? theme.colors.background.deep
      : "transparent",
    borderRadius: theme.radius.medium,
    "&:hover": {
      background: theme.colors.background.hover,
    },
  }),
};
