/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { useEffect, useRef } from "react";

const todoCateStyles = {
  input: (theme: Theme) => ({
    border: "none",
    outline: "none",
    background: "none",
    padding: "0",
    // width: "100%",
    "&::placeholder": {
      color: theme.colors.primary.normal,
    },
  }),
  span: () => ({
    fontSize: "14px",
  }),
};

type TodoCateProps = {
  isEdit?: boolean;
  onSubmit?: () => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  value?: string | number;
};

function TodoCate({
  isEdit,
  onSubmit,
  onChange,
  value,
}: TodoCateProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { input, span } = todoCateStyles;

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEdit]);

  return (
    <>
      {isEdit ? (
        <input
          css={input}
          type="text"
          ref={inputRef}
          value={value}
          onChange={onChange}
          onBlur={onSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit?.();
            }
          }}
        />
      ) : (
        <span css={span}>{value}</span>
      )}
    </>
  );
}

export default TodoCate;
