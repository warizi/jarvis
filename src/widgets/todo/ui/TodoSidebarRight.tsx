/** @jsxImportSource @emotion/react */

import { SidebarIcon } from "@shared/components/icon";
import { todoSidebarRightStyles } from "./TodoSidebarRight.style";
import { useState } from "react";
import {
  TodoLabelSelector,
  useTodoFilter,
} from "@features/todo";
import { TodoLabel } from "@entities/todo/model/type";
import { TodoPageFilter } from "@features/todo/model/useTodoPageFilterStore";
import { Id } from "@shared/config/type/commonType";
import {
  InputPeriod,
  SearchBar,
} from "@shared/components/form";

function TodoSidebarRight() {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilter, filter } = useTodoFilter();
  const { label, period } = filter;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLabelFilter = (
    label: (TodoLabel & Id) | null
  ) => {
    let selectedLabel = label;

    if (selectedLabel?.id === filter.label?.id) {
      selectedLabel = null;
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
  const handlePeriod = (period: Date[]) => {
    const newFilter = {
      ...filter,
      period,
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
        <TodoLabelSelector
          onChange={(lable) => {
            handleLabelFilter(
              lable
                ? {
                    id: lable?.id || 0,
                    name: lable?.name || "",
                    color: lable?.color || "",
                    order: 0,
                  }
                : null
            );
          }}
          value={label}
        />
        <div css={divider}>
          <span>기간</span>
        </div>
        <InputPeriod
          onChange={handlePeriod}
          data={period}
        />
      </div>
    </div>
  );
}

export default TodoSidebarRight;
