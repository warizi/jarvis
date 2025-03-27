import { Theme } from "@emotion/react";

export const templateColorPickerStyles = {
  container: (theme: Theme) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "7px",
    padding: "7px",
    width: "fit-content",
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.small,
    boxShadow: theme.shadow.medium,
  }),
  color:
    // (selectedColor: string) =>
    (color: string) => (theme: Theme) => ({
      width: "30px",
      height: "30px",
      borderRadius: theme.radius.small,
      backgroundColor: color,
      transition: "transform 0.2s",
      cursor: "pointer",
      // border: `1px solid ${
      //   selectedColor === color
      //     ? theme.colors.border.deepGray
      //     : "transparent"
      // }`,
      "&:hover": {
        transform: "scale(1.1)",
      },
    }),
};
