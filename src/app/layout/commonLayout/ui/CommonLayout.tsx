/** @jsxImportSource @emotion/react */

import NavBar from "@app/layout/sidebar";
import { Theme } from "@emotion/react";
import { ContextMenu } from "@shared/components/contextMenu";
import { SplitModal } from "@shared/components/splitModal";
import { Outlet } from "react-router-dom";

const commonLayoutStyles = (theme: Theme) =>
  ({
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.colors.background.gray,
    color: theme.colors.text.primary,
  } as const);

const mainStyles = {
  height: "100vh",
  width: "100%",
} as const;

function CommonLayout() {
  return (
    <div css={commonLayoutStyles}>
      <NavBar />
      <div css={mainStyles}>
        <Outlet />
      </div>
      <SplitModal />
      <ContextMenu />
    </div>
  );
}

export default CommonLayout;
