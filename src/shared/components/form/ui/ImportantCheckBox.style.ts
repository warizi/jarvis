export const starCheckboxStyles = {
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
  checkmark: () =>
    ({
      position: "relative",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    } as const),
};
