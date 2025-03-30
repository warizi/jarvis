/** @jsxImportSource @emotion/react */

import { SidebarIcon } from "@shared/components/icon";
import { todoSidebarRightStyles } from "./TodoSidebarRight.style";
import { useState } from "react";
import {
  DragableTodoLabelList,
  useTodoFilter,
} from "@features/todo";
import { TodoLabel } from "@entities/todo/model/type";
import { TodoPageFilter } from "@features/todo/model/useTodoPageFilterStore";
import { Id } from "@shared/config/type/commonType";
import { SearchBar } from "@shared/components/form";

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
  const handleSearch = (text: string) => {
    const newFilter = {
      ...filter,
      text,
    };
    setFilter(newFilter as TodoPageFilter);
  };

  const {
    container,
    toggleButton,
    innerContainer,
    title,
    divider,
  } = todoSidebarRightStyles;
  return (
    <div css={container(isOpen)}>
      <div css={toggleButton} onClick={toggleOpen}>
        <SidebarIcon size={20} />
      </div>
      <div css={innerContainer(isOpen)}>
        <div css={title}>필터</div>
        <div css={divider}>
          <span>검색</span>
        </div>
        <SearchBar
          onChange={(e) => handleTextFilter(e)}
          onSearch={handleSearch}
        />
        <div css={divider}>
          <span>라벨</span>
        </div>
        <DragableTodoLabelList
          selectedLabel={label}
          onClick={handleLabelFilter}
        />
      </div>
    </div>
  );
}

export default TodoSidebarRight;
