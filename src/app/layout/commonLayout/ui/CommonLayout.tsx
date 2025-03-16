/** @jsxImportSource @emotion/react */

import Sidebar from "@app/layout/sidebar";
import { Theme } from "@emotion/react";
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
};

function CommonLayout() {
  return (
    <div css={commonLayoutStyles}>
      <Sidebar />
      <div css={mainStyles}>
        <Outlet />
      </div>
    </div>
  );
}

export default CommonLayout;
