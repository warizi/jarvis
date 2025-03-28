// import { Theme } from "@emotion/react";

import { Theme } from "@emotion/react";

export const NoteItemStyles = {
  container: (theme: Theme) =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      minHeight: "45px",
      padding: "0 15px 0 0",
      borderRadius: theme.radius.small,
      backgroundColor: theme.colors.background.deep,
      cursor: "pointer",
      transition: "none",
      overflowY: "hidden",
      color: theme.colors.text.primary,
      "&:hover": {
        backgroundColor: theme.colors.background.hover,
      },
    } as const),
  label: (color: string) => ({
    display: "block",
    width: "8px",
    height: "45px",
    backgroundColor: color,
    marginRight: "5px",
  }),
  innerContainer: () =>
    ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexDirection: "row",
    } as const),
};
