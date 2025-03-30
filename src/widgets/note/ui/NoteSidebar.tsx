/** @jsxImportSource @emotion/react */

import { SidebarTitle } from "@shared/components/sidebar";
import DragableNoteCateList from "./DragableNoteCateList";

function NoteSidebar() {
  return (
    <div>
      <SidebarTitle title="NOTE" />
      <DragableNoteCateList />
    </div>
  );
}

export default NoteSidebar;
