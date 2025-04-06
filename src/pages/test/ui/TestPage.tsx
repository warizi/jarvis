/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import ThemeToggleButton from "./ThemeToggleButton";
// import { useTest } from "../model/useTest";

const pageContainerStyles = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
} as const;

function TestPage() {
  // useTest();
  return (
    <div css={pageContainerStyles}>
      <SidebarWrapper>sidebar</SidebarWrapper>
      <div
        css={{
          width: "100%",
          padding: "20px",
        }}
      >
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default TestPage;
