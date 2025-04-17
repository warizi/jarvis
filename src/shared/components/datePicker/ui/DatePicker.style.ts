import { css, Theme } from "@emotion/react";

export const datePickerStyles = {
  container: (theme: Theme) =>
    css({
      width: "240px",
      height: "fit-content",
      boxShadow: theme.shadow.medium,
      borderRadius: theme.radius.medium,
      background: theme.colors.background.gray,
      padding: "10px",
    }),
};
