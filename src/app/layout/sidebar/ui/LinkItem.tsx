/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { Link } from "react-router-dom";

type LinkItemProps = {
  icon: React.ReactNode;
  to: string;
  title?: string;
  isCurrent?: boolean;
};

const linkItemStyles =
  (isCurrent: boolean) => (theme: Theme) =>
    ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      color: isCurrent
        ? "white"
        : theme.colors.text.secondary,
      backgroundColor: isCurrent
        ? theme.colors.primary.light
        : theme.colors.background.gray,
      borderRadius: "9999px",
      cursor: "pointer",
      "&:hover": {
        color: isCurrent
          ? "white"
          : theme.colors.text.primary,
        backgroundColor: isCurrent
          ? theme.colors.primary.dark
          : theme.colors.background.hover,
      },
    } as const);

function LinkItem({
  icon,
  to,
  title = "",
  isCurrent = false,
}: LinkItemProps) {
  return (
    <Link to={to} draggable="false" aria-label={title}>
      <div css={linkItemStyles(isCurrent)}>{icon}</div>
    </Link>
  );
}

export default LinkItem;
