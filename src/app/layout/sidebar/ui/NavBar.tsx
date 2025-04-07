/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { Logo } from "@shared/components/logo";
import NavLink from "./NavLink";
import { ThemeToggleButton } from "@shared/components/button";

const navBarStyles = (theme: Theme) =>
  ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 0 0",
    backgroundColor: theme.colors.background.deep,
    color: theme.colors.text.primary,
    // boxShadow: theme.shadow.small,
    width: "80px",
    height: "100vh",
    zIndex: 1300,
  } as const);

function NavBar() {
  return (
    <div css={navBarStyles}>
      <Logo size="sm" />
      <NavLink />
      <div
        css={{
          marginBottom: "10px",
        }}
      >
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default NavBar;
