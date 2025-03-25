/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { Theme, useTheme } from "@emotion/react";

const baseStyle = (theme: Theme) =>
  ({
    width: "100%",
    border: "none",
    borderRadius: theme.radius.medium,
    outline: "none",
    resize: "none",
    overflow: "hidden", // 스크롤 숨김
    boxSizing: "border-box",
    padding: "10px",
  } as const);

interface MemoTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  height?: string; // 예: "100px", "auto"
}

function MemoTextarea({
  value,
  onChange,
  height = "100px",
  ...rest
}: MemoTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const theme = useTheme();

  // 입력 내용에 따라 높이 자동 조정
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";

      // scrollHeight와 minHeight 비교 후 큰 값 사용
      const minHeight = parseInt(height);
      const newHeight = Math.max(
        textarea.scrollHeight,
        minHeight
      );
      textarea.style.height = `${newHeight}px`;
    }
  }, [value, height]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      css={{ ...baseStyle(theme), height }}
      {...rest}
    />
  );
}

export default MemoTextarea;
