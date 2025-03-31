/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import SplitModalToggleButton from "./SplitModalToggleButton";
import ThemeToggleButton from "./ThemeToggleButton";
import { ContextMenu } from "@shared/components/contextMenu";
import {
  CustomColorPicker,
  MemoTextarea,
  SearchBar,
  TemplateColorPicker,
  TodoCheckbox,
} from "@shared/components/form";
import SubTodoForm from "@features/todo/ui/SubTodoForm";
import { useState } from "react";
import {
  // DragableTodoLabelList,
  TodoLabelCreateBtn,
  TodoLabelItem,
} from "@features/todo";
import {
  DragableNoteLabelList,
  NoteCard,
  NoteCateItem,
} from "@features/note";
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
        <SearchBar />
        <TemplateColorPicker
          selectedColor="#6D4645"
          onClick={() => {}}
        />
        <CustomColorPicker size={30} />
        <NoteCateItem
          data={{
            id: 1,
            name: "test",
            order: 1000,
          }}
        />
        <DragableNoteLabelList onClick={() => {}} />
        <NoteCard
          data={{
            id: 1,
            title: "test",
            isImportant: 0,
            label: {
              id: 1,
              name: "test",
              color: "#d9d9d9",
              order: 1000,
            },
            content: "sldgjklsjdklfjlk",
            order: 1000,
            cateId: 1,
          }}
        />
      </div>
    </div>
  );
}

export default TestPage;
