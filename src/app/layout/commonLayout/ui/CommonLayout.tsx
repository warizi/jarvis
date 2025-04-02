/** @jsxImportSource @emotion/react */

import NavBar from "@app/layout/sidebar";
import { Theme } from "@emotion/react";
import {
  ContextMenu,
  useContextMenuStore,
} from "@shared/components/contextMenu";
import { SplitModal } from "@shared/components/splitModal";
import { TaskSplitModal } from "@widgets/todo-note-task";
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
  const { isOpen } = useContextMenuStore();
  return (
    <div css={commonLayoutStyles}>
      <NavBar />
      <div css={mainStyles}>
        <Outlet />
      </div>
      <SplitModal task={<TaskSplitModal />} />
      {isOpen && <ContextMenu />}
    </div>
  );
}

export default CommonLayout;
