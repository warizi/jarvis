/** @jsxImportSource @emotion/react */

import { keyframes } from "@emotion/react";
import { SPLIT_MODAL_TRANSITION } from "../model/transition";
import useSplitModalStore from "../model/splitModalStore";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
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
    transform: translateX(-100%);
  }
`;

const layerAnimation = (isCloseStart: boolean) => ({
  animation: `${isCloseStart ? slideOut : slideIn} ${
    SPLIT_MODAL_TRANSITION.s
  }s forwards ease-in-out`,
});

const containerStyles = {
  width: "100%",
  height: "100%",
} as const;

function SplitModalLeftLayer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCloseStart } = useSplitModalStore();
  return (
    <div
      css={{
        ...containerStyles,
        ...layerAnimation(isCloseStart),
      }}
    >
      {children}
    </div>
  );
}

export default SplitModalLeftLayer;
