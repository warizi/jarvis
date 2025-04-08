/** @jsxImportSource @emotion/react */

import { ThemeToggleButton } from "@shared/components/button";
import { useModalStore } from "@shared/components/modal";
import { SidebarWrapper } from "@shared/components/sidebar";
// import { useTest } from "../model/useTest";

const pageContainerStyles = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
} as const;

function TestPage() {
  // useTest();
  const { open, close } = useModalStore();

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
        <button
          onClick={() => {
            open({
              title: "Test Modal",
              content: (
                <div>
                  <h2>Test Modal</h2>
                  <p>This is a test modal.</p>
                </div>
              ),
              onCancel: () => {
                console.log("cancel");
                close();
              },
              onConfirm: () => {
                console.log("confirm");
                close();
              },
            });
          }}
        >
          modal
        </button>
      </div>
    </div>
  );
}

export default TestPage;
