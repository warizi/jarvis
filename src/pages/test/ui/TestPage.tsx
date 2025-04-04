/** @jsxImportSource @emotion/react */

import { LabelSelector } from "@shared/components/form";
import { SidebarWrapper } from "@shared/components/sidebar";
// import { useTest } from "../model/useTest";

const MOCK_LABELS = [
  { id: 1, name: "Label 1", color: "#FF0000", order: 1 },
  { id: 2, name: "Label 2", color: "#00FF00", order: 2 },
  { id: 3, name: "Label 3", color: "#0000FF", order: 3 },
];

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
        <LabelSelector
          labels={MOCK_LABELS}
          onAddLabel={(lable) => {
            MOCK_LABELS.push({
              id: MOCK_LABELS.length + 1,
              name: lable.name,
              color: lable.color,
              order: MOCK_LABELS.length + 1,
            });
          }}
          onSelectLabel={(label) => {
            console.log(label);
          }}
          onDeleteLabel={(id) => {
            const index = MOCK_LABELS.findIndex(
              (label) => label.id === id
            );
            if (index !== -1) {
              MOCK_LABELS.splice(index, 1);
            }
          }}
        />
      </div>
    </div>
  );
}

export default TestPage;
