import { Theme } from "@emotion/react";

export type ContextMenuLocation = {
  x: number;
  y: number;
};
export const contextMenuStyles = {
  container:
    ({ x = 0, y = 0 }: ContextMenuLocation) =>
    (theme: Theme) =>
      ({
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: y,
        left: x,
        zIndex: 10000,
        width: "fit-content",
        minWidth: "80px",
        minHeight: "20px",
        gap: "2px",
        backgroundColor: theme.colors.background.deep,
        borderRadius: theme.radius.small,
        boxShadow: theme.shadow.small,
        overflow: "hidden",
      } as const),
};
