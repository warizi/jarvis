/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { sidebarItemWrapperStyles } from "./SidebarItemWrapper.style";

type SidebarItemWrapperProps = {
  count?: number;
  icon?: React.ReactNode;
  isCurrentLink?: boolean;
  linkTo?: string;
  onContextMenu?: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
  children?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
};

function SidebarItemWrapper({
  count,
  icon,
  isCurrentLink,
  linkTo,
  onContextMenu,
  children,
  onClick,
}: SidebarItemWrapperProps) {
  const { li, innerContainer, link } =
    sidebarItemWrapperStyles;

  return (
    <li
      onContextMenu={onContextMenu}
      css={li}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      <Link
        to={linkTo || "/"}
        draggable={false}
        css={link(isCurrentLink || false)}
      >
        <div css={innerContainer}>
          {icon && icon}
          {children}
        </div>
        {count ? <span>{count}</span> : null}
      </Link>
    </li>
  );
}

export default SidebarItemWrapper;
