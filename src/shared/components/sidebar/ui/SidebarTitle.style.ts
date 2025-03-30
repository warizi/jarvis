import { Theme } from "@emotion/react";

export const SidebarTitleStyles = {
  container: () => ({
    width: "100%",
    height: "60px",
  }),
  h2: (theme: Theme) => ({
    fontSize: "24px",
    fontWeight: "bold",
    color: theme.colors.text.primary,
    padding: "10px 10px",
    display: "flex",
    alignItems: "center",
  }),
};
