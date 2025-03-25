/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { toggleListWrapperStyles } from "./ToggleListWrapper.style";
import { ArrowDown } from "@shared/components/icon";

function ToggleListWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const { container, header, content, button } =
    toggleListWrapperStyles;
  return (
    <div css={container}>
      <div css={header}>
        <h4>{title}</h4>
        <div className="line" />
        <button
          css={button(isOpen)}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowDown />
        </button>
      </div>
      <div css={content(isOpen)}>{children}</div>
    </div>
  );
}

export default ToggleListWrapper;
