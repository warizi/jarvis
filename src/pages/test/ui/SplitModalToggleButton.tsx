/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { useSplitModalStore } from "@shared/components/splitModal";
import { SplitModalType } from "@shared/components/splitModal/model/splitModalStore";

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
    <button
      css={buttonStyle}
      onClick={() =>
        open({
          title: "TEST 제목",
          itemId: 0,
          type: SplitModalType.NOTE,
          content: <div>test</div>,
        })
      }
    >
      모달 오픈
    </button>
  );
}

export default SplitModalToggleButton;
