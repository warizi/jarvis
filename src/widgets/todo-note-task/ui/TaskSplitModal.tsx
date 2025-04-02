/** @jsxImportSource @emotion/react */

import {
  TASK_SPLIT_MODAL_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import TaskFinder from "./TaskFinder";
import { taskSplitModalStyles } from "./TaskSplitModal.style";
import TaskSplitModalTab from "./TaskSplitModalTab";
import TaskView from "./TaskView";

function TaskSplitModal() {
  const { container, content } = taskSplitModalStyles;
  const { activeTab } = useTaskSplitModalStore();

  return (
    <div css={container}>
      <TaskSplitModalTab />
      {activeTab && (
        <div css={content}>
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
