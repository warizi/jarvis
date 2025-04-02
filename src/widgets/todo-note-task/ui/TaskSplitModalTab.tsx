/** @jsxImportSource @emotion/react */

import {
  TASK_SPLIT_MODAL_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import { taskSplitModalTabStyles } from "./TaskSplitModalTab.style";

function TaskSplitModalTab() {
  const { container, tab } = taskSplitModalTabStyles;
  const { activeTab, setActiveTab } =
    useTaskSplitModalStore();

  return (
    <div css={container}>
      {/* <button
        css={tab(activeTab === TASK_SPLIT_MODAL_TAB.SEARCH)}
        onClick={() =>
          setActiveTab(TASK_SPLIT_MODAL_TAB.SEARCH)
        }
      >
        {TASK_SPLIT_MODAL_TAB.SEARCH}
      </button> */}
      <button
        css={tab(activeTab === TASK_SPLIT_MODAL_TAB.FINDER)}
        onClick={() =>
          setActiveTab(TASK_SPLIT_MODAL_TAB.FINDER)
        }
      >
        {TASK_SPLIT_MODAL_TAB.FINDER}
      </button>
      {/* <button
        css={tab(activeTab === TASK_SPLIT_MODAL_TAB.TASK)}
        onClick={() =>
          setActiveTab(TASK_SPLIT_MODAL_TAB.TASK)
        }
      >
        {TASK_SPLIT_MODAL_TAB.TASK}
      </button> */}
    </div>
  );
}

export default TaskSplitModalTab;
