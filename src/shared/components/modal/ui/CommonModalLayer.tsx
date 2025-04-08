/** @jsxImportSource @emotion/react */

import { CloseIcon } from "@shared/components/icon";
import { CommonModalLayerStyles } from "./CommonModalLayer.style";
import useModalStore from "../model/useModalStore";
import { keyframes, useTheme } from "@emotion/react";

const ScaleUp = keyframes`
  0% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
`;

const ScaleDown = keyframes`
  0% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
`;
const modalAnimation = (isCloseStart: boolean) => ({
  animation: `${
    isCloseStart ? ScaleDown : ScaleUp
  } 0.3s forwards ease-in-out`,
});

function CommonModalLayer({
  title,
  children,
  onConfirm,
  onCancel,
}: {
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}) {
  const { close, isCloseStart } = useModalStore();
  const theme = useTheme();
  const {
    container,
    header,
    closeButton,
    content,
    footer,
    confirmButton,
    cancelButton,
  } = CommonModalLayerStyles;
  return (
    <div
      css={{
        ...container(theme),
        transformOrigin: "0 0",
        ...modalAnimation(isCloseStart),
      }}
    >
      <div css={header}>
        <h2>{title}</h2>
        <button css={closeButton} onClick={close}>
          <CloseIcon />
        </button>
      </div>
      <div css={content}>{children}</div>
      <div css={footer}>
        {onCancel && (
          <button css={cancelButton} onClick={onCancel}>
            Cancel
          </button>
        )}
        {onConfirm && (
          <button css={confirmButton} onClick={onConfirm}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}

export default CommonModalLayer;
