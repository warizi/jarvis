import { Theme } from "@emotion/react";

export const todoSidebarRightStyles = {
  container: (isOpen: boolean) => (theme: Theme) =>
    ({
      position: "relative",
      height: "100vh",
      width: isOpen ? "300px" : "0px",
      transition: "width 0.3s",
      backgroundColor: theme.colors.background.gray,
      boxShadow: theme.shadow.small,
      zIndex: 1300,
    } as const),
  innerContainer: (isOpen: boolean) => (theme: Theme) =>
    ({
      position: "relative",
      height: "100vh",
      width: isOpen ? "300px" : "0px",
      transition: "width 0.3s",
      overflow: "hidden",
      backgroundColor: theme.colors.background.gray,
    } as const),
  toggleButton: () =>
    ({
      position: "absolute",
      width: "30px",
      height: "30px",
      top: "10px",
      right: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 1300,
    } as const),
};
