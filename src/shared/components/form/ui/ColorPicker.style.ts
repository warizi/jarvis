export const colorPickerStyles = {
  container: (size: number) => () =>
    ({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: size,
      height: size,
    } as const),
  colorDisplay: (color: string, size: number) => () => ({
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
  }),
  input: () => () =>
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
    } as const),
};
