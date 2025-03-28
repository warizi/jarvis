import { Theme } from "@emotion/react";

export const dragableNoteLabelListStyles = {
  container: () => ({
    width: "100%",
  }),
  ul: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "5px",
      padding: "5px",
      backgroundColor: theme.colors.background.gray,
      borderRadius: theme.radius.medium,
      // border: `1px solid ${theme.colors.border.deepGray}`,
    } as const),
};
