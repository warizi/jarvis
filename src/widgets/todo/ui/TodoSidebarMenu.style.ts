import { Theme } from "@emotion/react";

export const TodoSidebarMenuStyle = {
  container: (theme: Theme) => ({
    padding: "10px",
    minWidth: "200px",
    marginTop: "20px",
    borderRadius: theme.radius.large,
    border: `1px solid ${theme.colors.border.deepGray}`,
    marginBottom: "10px",
    transition: "none",
  }),
  ul: () =>
    ({
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      // padding: "10px",
      transition: "none",
    } as const),
  li: (isActive: boolean) => (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: isActive
      ? theme.colors.primary.light
      : theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    // boxShadow: theme.shadow.small,
    transition: "none",
  }),
  a: (isActive: boolean) => (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: isActive ? "white" : theme.colors.text.primary,
    textDecoration: "none",
    width: "100%",
    height: "50px",
    transition: "none",
    borderRadius: theme.radius.medium,
    "&:hover": {
      background: isActive
        ? theme.colors.primary.normal
        : theme.colors.background.hover,
    },
  }),
  span: () =>
    ({
      marginLeft: "10px",
      transition: "none",
      lineHeight: "20px",
      fontSize: "16px",
      verticalAlign: "middle",
    } as const),
};
