import { Theme } from "@emotion/react";

export const TodoSidebarMenuStyle = {
  container: () => ({
    marginTop: "20px",
  }),
  ul: (theme: Theme) =>
    ({
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      marginBottom: "10px",
      // padding: "10px",
      "& li": {
        display: "flex",
        alignItems: "center",
        "& a": {
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
        },
      },
    } as const),
};
