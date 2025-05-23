import { Theme } from "@emotion/react";

export const dragableNoteLabelListStyles = {
  container: () =>
    ({
      width: "100%",
    } as const),
  ul: (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap", // 줄바꿈 비허용
      whiteSpace: "nowrap", // 텍스트 줄바꿈도 방지
      overflow: "auto",
      gap: "8px",
      padding: "5px 10px",
      backgroundColor: theme.colors.background.gray,
      borderRadius: theme.radius.medium,
    } as const),
};
