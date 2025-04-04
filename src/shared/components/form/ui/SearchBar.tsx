/** @jsxImportSource @emotion/react */

import {
  CloseIcon,
  SearchIcon,
} from "@shared/components/icon";
import { searchBarStyles } from "./SearchBar.style";
import { useRef, useState } from "react";

function SearchBar({
  value = "",
  onChange,
  onSearch,
}: {
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onSearch?: (value: string) => void;
}) {
  const { container, input, button, resetButton } =
    searchBarStyles;

  const [text, setText] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onChange) {
      onChange(e);
    }
    setText(e.target.value);
  };
  return (
    <form
      css={container}
      onSubmit={(e) => {
        e.preventDefault();
        if (onSearch) {
          onSearch(text);
        }
      }}
    >
      <button css={button} type="submit">
        <SearchIcon />
      </button>
      <input
        ref={ref}
        type="text"
        css={input}
        value={text}
        onChange={handleChange}
        aria-label="검색어 입력"
      />
      {text.length > 0 && (
        <button
          css={resetButton}
          type="reset"
          onClick={() => {
            if (ref.current) {
              ref.current.focus();
            }
            setText("");
            if (onSearch) {
              onSearch("");
            }
          }}
        >
          <CloseIcon size={18} />
        </button>
      )}
    </form>
  );
}

export default SearchBar;
