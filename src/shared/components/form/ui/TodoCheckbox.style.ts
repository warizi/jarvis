import { Theme } from "@emotion/react";

export const todoCheckboxStyles = {
  container: () =>
    ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "25px",
      height: "25px",
      cursor: "pointer",
    } as const),
  input: () =>
    ({
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: 0,
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: 0,
      cursor: "pointer",
      opacity: 0,
      zIndex: 1,
    } as const),
  checkmark: (isChecked: boolean) => (theme: Theme) =>
    ({
      position: "relative",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: isChecked
        ? theme.colors.primary.normal
        : "none",
      cursor: "pointer",
      border: `2px solid ${theme.colors.primary.normal}`,
      "& svg": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: isChecked ? "block" : "none",
        color: "white",
      },
    } as const),
};
