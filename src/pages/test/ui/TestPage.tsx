/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import SplitModalToggleButton from "./SplitModalToggleButton";
import ThemeToggleButton from "./ThemeToggleButton";
import { ContextMenu } from "@shared/components/contextMenu";
import {
  MemoTextarea,
  TodoCheckbox,
} from "@shared/components/form";
import SubTodoForm from "@features/todo/ui/SubTodoForm";
import { useState } from "react";
import {
  // DragableTodoLabelList,
  TodoLabelCreateBtn,
  TodoLabelItem,
} from "@features/todo";
// import { useTest } from "../model/useTest";

const pageContainerStyles = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
} as const;

function TestPage() {
  const [value, setValue] = useState<string>("");
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  // useTest();
  return (
    <div css={pageContainerStyles}>
      <SidebarWrapper>sidebar</SidebarWrapper>
      <div>
        <ThemeToggleButton />
        <SplitModalToggleButton />
        <ContextMenu />
        <TodoCheckbox checked />
        <SubTodoForm data='[{"text":"test","isDone":false}]' />
        <MemoTextarea
          value={value}
          onChange={handleChange}
          placeholder="내용을 입력하세요."
        />
        {/* <ColorPicker value="#ffffff" onChange={() => {}} /> */}
        <TodoLabelCreateBtn />
        <TodoLabelItem
          data={{
            id: 1,
            name: "test",
            color: "#d9d9d9",
            order: 1000,
          }}
        />
        {/* <DragableTodoLabelList /> */}
      </div>
    </div>
  );
}

export default TestPage;
