import { Theme } from "@emotion/react";

export const dashboardCardStyles = {
  container: (theme: Theme) => ({
    width: "fit-content",
    height: "fit-content",
    padding: "12px",
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    boxShadow: theme.shadow.superSmall,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.03)",
    },
  }),
};
