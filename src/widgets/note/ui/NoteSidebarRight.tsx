/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNoteFilter } from "../model/useNoteFilter";
import { NoteLabel } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { NotePageFilter } from "../model/useNotePageFilterStore";
import { noteSidebarRightStyles } from "./NoteSidebarRight.style";
import { SidebarIcon } from "@shared/components/icon";
import { SearchBar } from "@shared/components/form";
import NoteLabelSelector from "@features/note/ui/NoteLabelSelector";

function NoteSidebarRight() {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilter, filter } = useNoteFilter();
  const { label } = filter;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLabelFilter = (
    label: (NoteLabel & Id) | null
  ) => {
    let selectedLabel = label;

    if (selectedLabel?.id === filter.label?.id) {
      selectedLabel = null;
    }

    const newFilter = {
      label: selectedLabel,
    };

    setFilter(newFilter as NotePageFilter);
  };

  const handleTextFilter = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const text = event.target.value;
    const newFilter = {
      ...filter,
      text,
    };

    setFilter(newFilter as NotePageFilter);
  };
  const handleSearch = (text: string) => {
    const newFilter = {
      ...filter,
      text,
    };
    setFilter(newFilter as NotePageFilter);
  };
  const {
    container,
    toggleButton,
    innerContainer,
    title,
    divider,
  } = noteSidebarRightStyles;

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
        <NoteLabelSelector
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
      </div>
    </div>
  );
}

export default NoteSidebarRight;
