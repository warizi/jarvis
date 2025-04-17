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
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background.gray,
      padding: 0,
      margin: 0,
    }),
  innerContainer: (isSelected: boolean) => (theme: Theme) =>
    css({
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      minWidth: "30px",
      minHeight: "30px",
      borderRadius: "50%",
      cursor: "pointer",
      ...setInnerContainerBackgroundColor(
        isSelected,
        theme
      ),
    }),
  rangeAll: (isActive: boolean) => (theme: Theme) =>
    css({
      position: "absolute",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      backgroundColor: isActive
        ? theme.colors.primary.normal
        : "none",
      zIndex: 1,
      borderRadius: "50%",
      ":hover": {
        backgroundColor: isActive
          ? theme.colors.primary.normal
          : theme.colors.background.hover,
      },
    }),
  rangeLeft: (isActive: boolean) => (theme: Theme) =>
    css({
      position: "absolute",
      left: "0px",
      top: "0px",
      width: "50%",
      height: "100%",
      backgroundColor: isActive
        ? theme.colors.primary.light
        : "none",
      zIndex: 1,
    }),
  rangeRight: (isActive: boolean) => (theme: Theme) =>
    css({
      position: "absolute",
      right: "0px",
      top: "0px",
      width: "50%",
      height: "100%",
      backgroundColor: isActive
        ? theme.colors.primary.light
        : "none",
      zIndex: 1,
    }),
  span: (props: DayPickerStyleProps) => (theme: Theme) => {
    return css({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      transform: "translateY(1.3px)",
      color: setTextColor(props, theme),
      fontWeight: props.isToday ? "bold" : "normal",
      zIndex: 2,
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
  const { isCurrentMonth, isHoliday, isSelected, isToday } =
    props;
  if (isSelected) return "white";
  if (isToday) return theme.colors.primary.normal;
  if (!isCurrentMonth) return theme.colors.text.secondary;
  if (isHoliday) return "rgb(200, 90, 90)";
  return theme.colors.text.primary;
}
