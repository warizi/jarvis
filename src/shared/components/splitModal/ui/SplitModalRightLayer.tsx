/** @jsxImportSource @emotion/react */

import { keyframes, Theme } from "@emotion/react";
import useSplitModalStore from "../model/splitModalStore";
import { SPLIT_MODAL_TRANSITION } from "../model/transition";
import SplitModalTitle from "./SplitModalTitle";
import { TrashIcon } from "@shared/components/icon";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const containerStyles = {
  width: "100%",
  height: "100%",
  padding: "10px",
  paddingLeft: 0,
  zIndex: 3000,
} as const;

const layerStyles = (theme: Theme) =>
  ({
    backgroundColor: theme.colors.background.deep,
    boxShadow: theme.shadow.large,
    borderRadius: theme.radius.medium,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 3000,
    ".content": {
      width: "100%",
      height: "100%",
      overflow: "auto",
    },
    ".footer": {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      padding: "10px",
    },
  } as const);

const deleteBtnStyles = (theme: Theme) =>
  ({
    border: "none",
    backgroundColor: "transparent",
    color: theme.colors.text.secondary,
    cursor: "pointer",
    borderRadius: theme.radius.small,
    transition: "color 0s",
    "&:hover": {
      transition: "color 0s",
      color: theme.colors.important.heigh,
      backgroundColor: theme.colors.background.hover,
    },
  } as const);

const layerAnimation = (isCloseStart: boolean) => ({
  animation: `${isCloseStart ? slideOut : slideIn} ${
    SPLIT_MODAL_TRANSITION.s
  }s forwards ease-in-out`,
});

function SplitModalRightLayer({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { isCloseStart, title, onDelete, close } =
    useSplitModalStore((state) => state);
  return (
    <div
      css={{
        ...containerStyles,
        ...layerAnimation(isCloseStart),
      }}
    >
      <div css={layerStyles}>
        <SplitModalTitle title={title} />
        <div className="content">{children}</div>
        <div className="footer">
          {onDelete && (
            <button
              css={deleteBtnStyles}
              onClick={async () => {
                await onDelete();
                close();
              }}
            >
              <TrashIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SplitModalRightLayer;
