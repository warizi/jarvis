/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { Link } from "react-router-dom";

type LinkItemProps = {
  icon: React.ReactNode;
  to: string;
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
        ? theme.colors.primary.dark
        : theme.colors.text.primary,
      backgroundColor: isCurrent
        ? theme.colors.primary.light
        : theme.colors.background.deep,
      boxShadow: theme.shadow.superSmall,
      borderRadius: "9999px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: isCurrent
          ? theme.colors.primary.dark
          : theme.colors.background.hover,
      },
    } as const);

function LinkItem({
  icon,
  to,
  isCurrent = false,
}: LinkItemProps) {
  return (
    <Link to={to} draggable="false">
      <div css={linkItemStyles(isCurrent)}>{icon}</div>
    </Link>
  );
}

export default LinkItem;
