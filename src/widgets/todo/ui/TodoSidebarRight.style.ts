import { Theme } from "@emotion/react";

export const todoSidebarRightStyles = {
  container: (isOpen: boolean) => (theme: Theme) =>
    ({
      position: "relative",
      height: "100vh",
      width: isOpen ? "300px" : "0px",
      transition: "width 0.3s",
      backgroundColor: theme.colors.background.deep,
      boxShadow: theme.shadow.small,
      zIndex: 1300,
    } as const),
  innerContainer: (isOpen: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "relative",
      height: "100vh",
      width: "300px",
      transition: "width 0.3s",
      overflow: "hidden",
      backgroundColor: theme.colors.background.deep,
      marginTop: "5px",
      padding: isOpen ? "10px" : "0px",
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
  title: (theme: Theme) => ({
    fontSize: theme.typography.size.large,
    color: theme.colors.text.primary,
    marginBottom: "5px",
    lineHeight: "30px",
  }),
  divider: (theme: Theme) => ({
    display: "flex",
    height: "17px",
    flexdirection: "row",
    width: "100%",
    "& span": {
      display: "inline-block", // block -> inline-block
      whiteSpace: "nowrap", // 줄바꿈 방지
      width: "auto", // fit-content 대신 auto 또는 제거
      color: theme.colors.text.secondary,
      fontSize: theme.typography.size.small,
      margin: "0 5px",
      lineHeight: "17px",
    },
    "& hr": {
      width: "100%",
      border: "none",
      borderBottom: `1px solid ${theme.colors.border.deepGray}`,
    },
  }),
};
