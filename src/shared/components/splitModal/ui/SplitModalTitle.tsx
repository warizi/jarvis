/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { ExitIcon } from "@shared/components/icon";
import useSplitModalStore from "../model/splitModalStore";

type SplitModalTitleProps = {
  title: string;
};

const splitModalTitleContainerStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 5px 0 15px",
  width: "100%",
  height: "40px",
  borderBottom: `1px solid ${theme.colors.border.gray}`,
  "& > h4": {
    margin: 0,
    fontSize: theme.typography.size.medium,
    color: theme.colors.text.primary,
  },
});

const splitModalExitButtonStyle = (theme: Theme) => ({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: theme.typography.size.large,
  color: theme.colors.text.secondary,
  borderRadius: theme.radius.medium,
  transition: "color 0s",
  "&:hover": {
    backgroundColor: theme.colors.background.hover,
    color: theme.colors.text.primary,
    transition: "color 0s",
  },
  "& > svg": {
    transition: "color 0s",
  },
  "&:hover > svg": {
    transition: "color 0s",
  },
});

function SplitModalTitle({ title }: SplitModalTitleProps) {
  const { close } = useSplitModalStore((state) => state);
  return (
    <div css={splitModalTitleContainerStyle}>
      <h4>{title}</h4>
      <button
        css={splitModalExitButtonStyle}
        onClick={close}
      >
        <ExitIcon color="currentColor" />
      </button>
    </div>
  );
}

export default SplitModalTitle;
