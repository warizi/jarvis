/** @jsxImportSource @emotion/react */

import { ThemeToggleButton } from "@shared/components/button";
import { Month } from "@shared/components/datePicker";
import { generateMonthData } from "@shared/components/datePicker/lib/dateUtils";
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

  const monthData = generateMonthData({
    year: 2025,
    month: 1,
  });
  console.log("month data: ", monthData);
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
                close();
              },
              onConfirm: () => {
                close();
              },
            });
          }}
        >
          modal
        </button>

        <Month
          width="300px"
          height="300px"
          year={2025}
          month={4}
        />
      </div>
    </div>
  );
}

export default TestPage;
