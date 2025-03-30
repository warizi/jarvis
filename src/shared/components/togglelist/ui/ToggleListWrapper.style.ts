import { Theme } from "@emotion/react";

export const toggleListWrapperStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      marginBottom: "20px",
      backgroundColor: theme.colors.background.deep,
      borderRadius: theme.radius.small,
      overflow: "hidden",
    } as const),
  header: (theme: Theme) =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      fontSize: "12px",
      color: theme.colors.text.secondary,
      borderBottom: `1px solid ${theme.colors.background.gray}`,
      "& .line": {
        width: "100%",
        height: "1px",
        backgroundColor: theme.colors.text.secondary,
        marginLeft: "10px",
      },
    } as const),
  button: (isOpen: boolean) => (theme: Theme) => ({
    border: "none",
    backgroundColor: "transparent",
    color: theme.colors.text.secondary,
    cursor: "pointer",
    transition: "0.3s",
    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
  }),
  content: (isOpen: boolean) => () =>
    ({
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      height: isOpen ? "auto" : "0px",
      transition: "0.3s",
    } as const),
};
