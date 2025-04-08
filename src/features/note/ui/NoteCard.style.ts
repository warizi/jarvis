import { Theme } from "@emotion/react";

export const noteCardStyles = {
  container: (theme: Theme) => ({
    // minWidth: "150px",
    // width: width ? `${width}px` : "200px",
    maxWidth: 350,
    minWidth: 200,
    backgroundColor: theme.colors.background.deep,
    borderRadius: theme.radius.medium,
    // overflowY: "hidden",
    cursor: "pointer",
    padding: "10px 0 10px 0",
    color: theme.colors.text.primary,
    boxShadow: theme.shadow.medium,
    ":hover": {
      backgroundColor: theme.colors.background.hover,
    },
  }),
  label: () =>
    ({
      position: "absolute",
      top: "-16px",
      left: "-10px",
      width: "fit-content",
      height: "fit-content",
    } as const),
  innerContainer: () =>
    ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 0 0 10px",
    } as const),
  contentDiv: () => ({
    height: "240px",
    padding: "0 5px",
    overflow: "hidden",
  }),
  titleSpan: (isLabel: boolean) => () => ({
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    padding: "5px 0",
    paddingLeft: isLabel ? "15px" : "0px",
  }),
};
