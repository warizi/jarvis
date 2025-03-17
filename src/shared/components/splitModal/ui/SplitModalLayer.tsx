/** @jsxImportSource @emotion/react */

import { keyframes, Theme } from "@emotion/react";
import useSplitModalStore from "../model/splitModalStore";
import { SPLIT_MODAL_TRANSITION } from "../model/transition";
import SplitModalTitle from "./SplitModalTitle";

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
  position: "fixed",
  top: 0,
  right: 0,
  width: "50vw",
  height: "100vh",
  padding: "10px",
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
  } as const);

const layerAnimation = (isCloseStart: boolean) => ({
  animation: `${isCloseStart ? slideOut : slideIn} ${
    SPLIT_MODAL_TRANSITION.s
  }s forwards ease-in-out`,
});

function SplitModalLayer() {
  const { isCloseStart, title } = useSplitModalStore(
    (state) => state
  );
  return (
    <div
      css={{
        ...containerStyles,
        ...layerAnimation(isCloseStart),
      }}
    >
      <div css={layerStyles}>
        <SplitModalTitle title={title} />
      </div>
    </div>
  );
}

export default SplitModalLayer;
