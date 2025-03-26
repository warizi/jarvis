/** @jsxImportSource @emotion/react */

import { SidebarIcon } from "@shared/components/icon";
import { todoSidebarRightStyles } from "./TodoSidebarRight.style";
import { useState } from "react";
import {
  DragableTodoLabelList,
  TodoLabelCreateBtn,
  useTodoFilter,
} from "@features/todo";
import { TodoLabel } from "@entities/todo/model/type";
import { TodoPageFilter } from "@features/todo/model/useTodoPageFilterStore";
import { Id } from "@shared/config/type/commonType";

function TodoSidebarRight() {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilter, filter } = useTodoFilter();
  const { label } = filter;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLabelFilter = (
    label: (TodoLabel & Id) | undefined
  ) => {
    let selectedLabel = label;

    if (selectedLabel?.id === filter.label?.id) {
      selectedLabel = undefined;
    }

    const newFilter = {
      label: selectedLabel,
    };

    setFilter(newFilter as TodoPageFilter);
  };

  const handleTextFilter = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const text = event.target.value;
    const newFilter = {
      ...filter,
      text,
    };

    setFilter(newFilter as TodoPageFilter);
  };

  const { container, toggleButton, innerContainer } =
    todoSidebarRightStyles;
  return (
    <div css={container(isOpen)}>
      <div css={toggleButton} onClick={toggleOpen}>
        <SidebarIcon />
      </div>
      <div css={innerContainer(isOpen)}>
        <span>search</span>
        <div></div>
        <input
          type="text"
          onChange={(e) => handleTextFilter(e)}
        />
        <div></div>
        <span>label</span>
        <DragableTodoLabelList
          selectedLabel={label}
          onClick={handleLabelFilter}
        />
        <TodoLabelCreateBtn />
      </div>
    </div>
  );
}

export default TodoSidebarRight;
