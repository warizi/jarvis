/** @jsxImportSource @emotion/react */

import {
  NoteIcon,
  TaskIcon,
} from "@shared/components/icon";
import { taskNavbarStyles } from "./TaskNavbar.style";

function TaskNavbar() {
  const { container, button } = taskNavbarStyles;
  return (
    <div css={container}>
      <button css={button}>
        <TaskIcon />
      </button>
      <button css={button}>
        <NoteIcon />
      </button>
    </div>
  );
}

export default TaskNavbar;
