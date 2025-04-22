import { Theme } from "@emotion/react";

export const dashboardCardStyles = {
  container: (theme: Theme) => ({
    width: "fit-content",
    height: "fit-content",
    padding: "16px",
    fontSize: theme.typography.size.medium,
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    boxShadow: theme.shadow.superSmall,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.03)",
    },
  }),
  titleSpan: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px",
      fontSize: theme.typography.size.large,
      fontWeight: 600,
    } as const),
};
