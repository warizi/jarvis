/** @jsxImportSource @emotion/react */

import { taskFinderStyles } from "./TaskFinder.style";
import TaskNavbar from "./TaskNavbar";
import TaskTodoSidebar from "./TaskTodoSidebar";

function TaskFinder() {
  const { container } = taskFinderStyles;
  return (
    <div css={container}>
      <TaskNavbar />
      <TaskTodoSidebar />
    </div>
  );
}

export default TaskFinder;
