/** @jsxImportSource @emotion/react */

import { keyframes, Theme } from "@emotion/react";
import { SPLIT_MODAL_TRANSITION } from "../model/transition";
import useSplitModalStore from "../model/splitModalStore";

const blurOn = (theme: Theme) => keyframes`
  from {
    backdrop-filter: blur(0);
    Webkitbackdrop-filter: blur(0);
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    backdrop-filter: blur(5px);
    Webkitbackdrop-filter: blur(5px);
    background-color: ${theme.colors.background.backdrop};
  }
`;

const blurOff = (theme: Theme) => keyframes`
  from {
    backdrop-filter: blur(5px);
    Webkitbackdrop-filter: blur(5px);
    background-color: ${theme.colors.background.backdrop};
  }
  to {
    backdrop-filter: blur(0);
    Webkitbackdrop-filter: blur(0);
    background-color: rgba(0, 0, 0, 0);
  }
`;

const backdropAnimation = (
  isCloseStart: boolean,
  theme: Theme
) => ({
  animation: `${
    isCloseStart ? blurOff(theme) : blurOn(theme)
  } ${SPLIT_MODAL_TRANSITION.s}s forwards ease-in-out`,
});

const backdropStyles =
  (isCloseStart: boolean) => (theme: Theme) =>
    ({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: theme.colors.background.backdrop,
      ...backdropAnimation(isCloseStart, theme),
    } as const);

function Backdrop() {
  const { isCloseStart } = useSplitModalStore(
    (state) => state
  );

  return <div css={backdropStyles(isCloseStart)}></div>;
}

export default Backdrop;
