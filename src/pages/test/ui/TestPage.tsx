/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import SplitModalToggleButton from "./SplitModalToggleButton";
import ThemeToggleButton from "./ThemeToggleButton";

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
      </div>
    </div>
  );
}

export default TestPage;
