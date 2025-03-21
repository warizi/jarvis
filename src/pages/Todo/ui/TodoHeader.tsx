/** @jsxImportSource @emotion/react */

import { todoHeaderStyle } from "./TodoHeader.style";

function TodoHeader({ title }: { title: string }) {
  const { container, h2 } = todoHeaderStyle;
  return (
    <div css={container}>
      <h2 css={h2}>{title}</h2>
    </div>
  );
}

export default TodoHeader;
