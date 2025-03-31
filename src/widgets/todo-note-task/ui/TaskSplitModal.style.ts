import { Theme } from "@emotion/react";

export const taskSplitModalStyles = {
  container: (theme: Theme) =>
    ({
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.success,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    } as const),
  content: (theme: Theme) => ({
    maxWidth: "800px",
    minWidth: "400px",
    height: "calc(100vh - 100px)",
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.large,
    boxShadow: theme.shadow.medium,
  }),
};
