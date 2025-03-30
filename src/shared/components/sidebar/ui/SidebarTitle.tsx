/** @jsxImportSource @emotion/react */

import { SidebarTitleStyles } from "./SidebarTitle.style";

function SidebarTitle({ title }: { title: string }) {
  const { container, h2 } = SidebarTitleStyles;
  return (
    <div css={container}>
      <h2 css={h2}>{title}</h2>
    </div>
  );
}

export default SidebarTitle;
