/** @jsxImportSource @emotion/react */

import { SidebarTitle } from "@shared/components/sidebar";
import DragableNoteCateList from "./DragableNoteCateList";
import NoteSidebarMenu from "./NoteSidebarMenu";

function NoteSidebar() {
  return (
    <div>
      <SidebarTitle title="NOTE" />
      <NoteSidebarMenu />
      <DragableNoteCateList />
    </div>
  );
}

export default NoteSidebar;
