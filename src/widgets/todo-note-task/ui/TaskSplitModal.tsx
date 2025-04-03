/** @jsxImportSource @emotion/react */

import { keyframes, useTheme } from "@emotion/react";
import {
  TASK_SPLIT_MODAL_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import TaskFinder from "./TaskFinder";
import { taskSplitModalStyles } from "./TaskSplitModal.style";
import TaskSplitModalTab from "./TaskSplitModalTab";
import TaskView from "./TaskView";

const sideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const sideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

function TaskSplitModal() {
  const { container, content } = taskSplitModalStyles;
  const theme = useTheme();
  const { activeTab, closeTabStart } =
    useTaskSplitModalStore();

  return (
    <div css={container}>
      <TaskSplitModalTab />
      {activeTab && (
        <div
          css={{
            ...content(theme),
            animation: `${
              closeTabStart ? sideOut : sideIn
            } 0.2s ease-in-out forwards`,
          }}
        >
          {activeTab === TASK_SPLIT_MODAL_TAB.SEARCH && (
            <div>search</div>
          )}
          {activeTab === TASK_SPLIT_MODAL_TAB.FINDER && (
            <TaskFinder />
          )}
          {activeTab === TASK_SPLIT_MODAL_TAB.TASK && (
            <TaskView />
          )}
        </div>
      )}
    </div>
  );
}

export default TaskSplitModal;
