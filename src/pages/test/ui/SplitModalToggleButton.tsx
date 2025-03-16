/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { useSplitModalStore } from "@shared/components/splitModal";

const buttonStyle = (theme: Theme) =>
  ({
    backgroundColor: theme.colors.background.deep,
    color: theme.colors.text.primary,
    border: "none",
    borderRadius: theme.radius.medium,
    padding: "5px 10px",
  } as const);

function SplitModalToggleButton() {
  const open = useSplitModalStore((state) => state.open);
  return (
    <button css={buttonStyle} onClick={open}>
      모달 오픈
    </button>
  );
}

export default SplitModalToggleButton;
