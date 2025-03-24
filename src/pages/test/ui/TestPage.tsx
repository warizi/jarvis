/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import SplitModalToggleButton from "./SplitModalToggleButton";
import ThemeToggleButton from "./ThemeToggleButton";
import { ContextMenu } from "@shared/components/contextMenu";
import { TodoCheckbox } from "@shared/components/form";

const pageContainerStyles = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
} as const;

function TestPage() {
  return (
    <div css={pageContainerStyles}>
      <SidebarWrapper>sidebar</SidebarWrapper>
      <div>
        <ThemeToggleButton />
        <SplitModalToggleButton />
        <ContextMenu />
        <TodoCheckbox checked />
      </div>
    </div>
  );
}

export default TestPage;
