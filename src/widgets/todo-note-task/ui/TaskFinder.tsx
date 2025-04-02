/** @jsxImportSource @emotion/react */

import NoteForm from "@features/note/ui/NoteForm";
import {
  TASK_DOMAIN,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import TaskCurrentTask from "./TaskCurrentTask";
import { taskFinderStyles } from "./TaskFinder.style";
import TaskFinderNavbar from "./TaskFinderNavbar";
import TaskFinderNote from "./TaskFinderNote";
import TaskNoteSidebar from "./TaskNoteSidebar";
import TaskTodoSidebar from "./TaskTodoSidebar";
import TaskFinderTodo from "./TaskFinderTodo";
import { TodoForm } from "@features/todo";

function TaskFinder() {
  const { container } = taskFinderStyles;
  const {
    finderTab: { domain, currentTask, noteData, todoData },
  } = useTaskSplitModalStore();
  return (
    <div css={container}>
      <TaskFinderNavbar />
      {domain === TASK_DOMAIN.TODO && <TaskTodoSidebar />}
      {domain === TASK_DOMAIN.NOTE && <TaskNoteSidebar />}
      {domain === TASK_DOMAIN.NOTE && <TaskFinderNote />}
      {domain === TASK_DOMAIN.TODO && <TaskFinderTodo />}
      {currentTask && (
        <TaskCurrentTask>
          {domain === TASK_DOMAIN.NOTE && noteData && (
            <NoteForm data={noteData} />
          )}
          {domain === TASK_DOMAIN.TODO && todoData && (
            <TodoForm data={todoData} />
          )}
        </TaskCurrentTask>
      )}
    </div>
  );
}

export default TaskFinder;
