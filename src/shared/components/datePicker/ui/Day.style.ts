import { css, Theme } from "@emotion/react";

export type DayPickerStyleProps = {
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isHoliday: boolean;
};

export const dayStyles = {
  container: (theme: Theme) =>
    css({
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background.gray,
    }),
  innerContainer: (isSelected: boolean) => (theme: Theme) =>
    css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: "80%",
      borderRadius: "50%",
      cursor: "pointer",
      ...setInnerContainerBackgroundColor(
        isSelected,
        theme
      ),
    }),
  span: (props: DayPickerStyleProps) => (theme: Theme) => {
    return css({
      color: setTextColor(props, theme),
    });
  },
};

function setInnerContainerBackgroundColor(
  isSelected: boolean,
  theme: Theme
) {
  let backgroundColor = theme.colors.background.gray;
  let hoverBackgroundColor = theme.colors.background.hover;

  if (isSelected) {
    backgroundColor = theme.colors.primary.normal;
    hoverBackgroundColor = theme.colors.primary.dark;
  }

  return {
    backgroundColor,
    ":hover": {
      backgroundColor: hoverBackgroundColor,
    },
  };
}

function setTextColor(
  props: DayPickerStyleProps,
  theme: Theme
) {
  const { isCurrentMonth, isHoliday, isSelected } = props;
  if (isSelected) return "white";
  if (!isCurrentMonth) return theme.colors.text.secondary;
  if (isHoliday) return "rgba(180, 0, 0, 1)";
  return theme.colors.text.primary;
}
