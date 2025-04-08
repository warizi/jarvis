import { Theme } from "@emotion/react";

export const CommonModalLayerStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 15000,
      backgroundColor: theme.colors.background.deep,
      borderRadius: theme.radius.medium,
      boxShadow: theme.shadow.large,
      overflow: "hidden",
      minWidth: "300px",
      width: "fit-content",
      minHeight: "200px",
      color: theme.colors.text.primary,
    } as const),
  header: (theme: Theme) =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "40px",
      padding: "0 10px",
      backgroundColor: theme.colors.background.hover,
      "& h2": {
        fontSize: theme.typography.size.medium,
      },
    } as const),
  closeButton: (theme: Theme) =>
    ({
      background: "none",
      border: "none",
      cursor: "pointer",
      height: "30px",
      width: "30px",
      padding: 0,
      margin: 0,
      color: theme.colors.text.secondary,
      ":hover": {
        backgroundColor: theme.colors.background.hover,
      },
    } as const),
  content: () =>
    ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
      width: "100%",
      padding: "10px",
    } as const),
  footer: () =>
    ({
      width: "100%",
      height: "60px",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    } as const),
  confirmButton: (theme: Theme) =>
    ({
      width: "80px",
      height: "35px",
      border: "none",
      borderRadius: theme.radius.medium,
      backgroundColor: theme.colors.primary.normal,
      color: "white",
      cursor: "pointer",
      ":hover": {
        backgroundColor: theme.colors.primary.dark,
      },
    } as const),
  cancelButton: (theme: Theme) =>
    ({
      width: "80px",
      height: "35px",
      border: "none",
      borderRadius: theme.radius.medium,
      backgroundColor: theme.colors.important.heigh,
      color: "white",
      cursor: "pointer",
      ":hover": {
        backgroundColor: theme.colors.important.heighHover,
      },
    } as const),
};
