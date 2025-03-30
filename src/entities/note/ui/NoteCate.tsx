/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { useEffect, useRef } from "react";

const noteCateStyles = {
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

type NoteCateProps = {
  isEdit?: boolean;
  onSubmit?: () => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  value?: string | number;
};

function NoteCate({
  isEdit,
  onSubmit,
  onChange,
  value,
}: NoteCateProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { input, span } = noteCateStyles;

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

export default NoteCate;
