/** @jsxImportSource @emotion/react */

import { SidebarWrapper } from "@shared/components/sidebar";
import { noteLayoutStyle } from "./NoteLayout.style";
import { NoteSidebar } from "@widgets/note";
import { Outlet } from "react-router-dom";

function NoteLayout() {
  const { container, content } = noteLayoutStyle;
  return (
    <div css={container}>
      <SidebarWrapper>
        <NoteSidebar />
      </SidebarWrapper>
      <div css={content}>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default NoteLayout;
