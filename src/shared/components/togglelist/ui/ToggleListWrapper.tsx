/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { toggleListWrapperStyles } from "./ToggleListWrapper.style";
import { ArrowDown } from "@shared/components/icon";

function ToggleListWrapper({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
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
