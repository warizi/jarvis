/** @jsxImportSource @emotion/react */

import { sidebarListWrapperStyles } from "./SidebarListWrapper.style";

type SidebarListButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

type SidebarListWrapperProps = {
  listTitle?: string;
  button?: SidebarListButtonProps;
  children: React.ReactNode;
  bottom?: React.ReactNode;
};

function SidebarListWrapper({
  listTitle,
  button,
  children,
  bottom,
}: SidebarListWrapperProps) {
  const { container, ul, listTitleContainer, buttonStyle } =
    sidebarListWrapperStyles;

  return (
    <div css={container}>
      {listTitle && (
        <div css={listTitleContainer}>
          <h3>{listTitle}</h3>
          {button && (
            <button
              css={buttonStyle}
              type="button"
              aria-label="button"
              onClick={(event) => {
                event.stopPropagation();
                button?.onClick?.();
              }}
            >
              {button?.icon}
            </button>
          )}
        </div>
      )}
      <ul css={ul}>{children}</ul>
      {bottom && bottom}
    </div>
  );
}

export default SidebarListWrapper;
