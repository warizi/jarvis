/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { sidebarItemWrapperStyles } from "./SidebarItemWrapper.style";

type SidebarItemWrapperProps = {
  count?: number;
  icon?: React.ReactNode;
  isEdit?: boolean;
  onSubmit?: () => void;
  isCurrentLink?: boolean;
  linkTo?: string;
  onContextMenu?: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
  text: string;
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function SidebarItemWrapper({
  count,
  icon,
  isEdit,
  onSubmit,
  isCurrentLink,
  linkTo,
  value,
  onChange,
  text,
  onContextMenu,
}: SidebarItemWrapperProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { li, innerContainer, link, span, input } =
    sidebarItemWrapperStyles;

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEdit]);
  return (
    <li onContextMenu={onContextMenu} css={li}>
      <Link
        to={linkTo || "/"}
        draggable={false}
        css={link(isCurrentLink || false)}
      >
        <div css={innerContainer}>
          {icon && icon}
          {isEdit ? (
            <input
              css={input(isCurrentLink || false)}
              type="text"
              draggable={false}
              ref={inputRef}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onSubmit?.();
                }
              }}
              value={value}
              onChange={onChange}
              onBlur={onSubmit}
            />
          ) : (
            <span css={span}>{text}</span>
          )}
        </div>
        {count ? <span>{count}</span> : null}
      </Link>
    </li>
  );
}

export default SidebarItemWrapper;
