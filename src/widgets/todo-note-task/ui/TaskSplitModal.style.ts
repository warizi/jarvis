import { Theme } from "@emotion/react";

export const taskSplitModalStyles = {
  container: () =>
    ({
      zIndex: 3000,
      width: "100%",
      padding: "10px",
      paddingRight: "0px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      paddingTop: "10px",
      alignItems: "center",
      gap: "10px",
    } as const),
  content: (theme: Theme) => ({
    width: "100%",
    minWidth: "100px",
    height: "calc(100vh - 70px)",
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.large,
    overflow: "hidden",
    boxShadow: theme.shadow.medium,
  }),
};
