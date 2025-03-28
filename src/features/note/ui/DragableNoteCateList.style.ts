import { Theme } from "@emotion/react";

export const dragableNoteItemListStyles = {
  container: (theme: Theme) => ({
    borderRadius: theme.radius.large,
    border: `1px solid ${theme.colors.border.deepGray}`,
    padding: "10px 10px 0 10px",
  }),
  ul: () =>
    ({
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      padding: 0,
      margin: 0,
      minWidth: "200px",
      gap: "10px",
    } as const),
};
