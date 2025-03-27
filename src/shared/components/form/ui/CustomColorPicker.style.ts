import { Theme } from "@emotion/react";

export const customColorPickerStyles = {
  container: (size: number) => () =>
    ({
      position: "relative",
      width: size,
      height: size,
    } as const),
  colorDisplay: (color: string) => (theme: Theme) => ({
    width: "100%",
    height: "100%",
    borderRadius: theme.radius.small,
    backgroundColor: color,
    cursor: "pointer",
  }),
  pickerWrapper: (size: number) =>
    ({
      position: "absolute",
      top: size + 5,
      width: "fit-content",
    } as const),
};
