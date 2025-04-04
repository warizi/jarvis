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
        <h3>{title}</h3>
        <button
          css={button(isOpen)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "접기" : "펴기"}
        >
          <ArrowDown />
        </button>
      </div>
      <div css={content(isOpen)}>{children}</div>
    </div>
  );
}

export default ToggleListWrapper;
