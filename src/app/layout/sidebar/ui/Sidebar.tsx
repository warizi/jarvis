/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { Logo } from "@shared/components/logo";
import NavLinkType from "./NavLink";

const sidebarStyle = (theme: Theme) =>
  ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 0 0",
    backgroundColor: theme.colors.background.gray,
    color: theme.colors.text.primary,
    boxShadow: theme.shadow.small,
    width: "80px",
    height: "100vh",
  } as const);

function Sidebar() {
  return (
    <div css={sidebarStyle}>
      <Logo size="sm" />
      <NavLinkType />
    </div>
  );
}

export default Sidebar;
