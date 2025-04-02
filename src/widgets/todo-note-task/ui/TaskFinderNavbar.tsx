/** @jsxImportSource @emotion/react */

import {
  NoteIcon,
  TaskIcon,
} from "@shared/components/icon";
import { taskFinderNavbarStyles } from "./TaskFinderNavbar.style";
import {
  TASK_DOMAIN,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";

function TaskFinderNavbar() {
  const { container, button } = taskFinderNavbarStyles;
  const {
    setFinderDomain,
    finderTab: { domain },
  } = useTaskSplitModalStore();
  return (
    <div css={container}>
      <button
        css={button(domain === TASK_DOMAIN.TODO)}
        onClick={() => setFinderDomain(TASK_DOMAIN.TODO)}
      >
        <TaskIcon />
      </button>
      <button
        css={button(domain === TASK_DOMAIN.NOTE)}
        onClick={() => setFinderDomain(TASK_DOMAIN.NOTE)}
      >
        <NoteIcon />
      </button>
    </div>
  );
}

export default TaskFinderNavbar;
