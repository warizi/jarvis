/** @jsxImportSource @emotion/react */

import { SidebarIcon } from "@shared/components/icon";
import { todoSidebarRightStyles } from "./TodoSidebarRight.style";
import { useState } from "react";

function TodoSidebarRight() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const { container, toggleButton, innerContainer } =
    todoSidebarRightStyles;
  return (
    <div css={container(isOpen)}>
      <div css={toggleButton} onClick={toggleOpen}>
        <SidebarIcon />
      </div>
      <div css={innerContainer(isOpen)}></div>
    </div>
  );
}

export default TodoSidebarRight;
