/** @jsxImportSource @emotion/react */

import { useGetAllTodoQuery } from "@entities/todo";
import {
  TASK_FINDER_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import { isToday } from "@shared/lib/isToday";
import { TodoItem } from "@features/todo";
import { useSplitModalStore } from "@shared/components/splitModal";

function TaskFinderTodo() {
  const {
    finderTab: { sideTab },
  } = useTaskSplitModalStore();
  const { data: allTodo } = useGetAllTodoQuery();
  const { setCurrentTodo } = useTaskSplitModalStore();
  const { type, itemId } = useSplitModalStore();

  const todoList = allTodo?.filter((todo) => {
    if (sideTab === TASK_FINDER_TAB.All) {
      return true;
    }

    if (sideTab === TASK_FINDER_TAB.Important) {
      return todo.isImportant;
    }

    if (sideTab === TASK_FINDER_TAB.TODAY) {
      return isToday(todo.isToday);
    }

    if (typeof sideTab === "number") {
      return todo.cateId === sideTab;
    }

    return false;
  });

  const isSameSplitItem = (id: number) => {
    if (type === "TODO") {
      return itemId === id;
    }
    return false;
  };

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "calc(100% - 240px)",
        overflowY: "auto",
      }}
    >
      {todoList?.map((todo) => (
        <div
          css={{
            opacity: isSameSplitItem(todo.id) ? 0.3 : 1,
          }}
        >
          <TodoItem
            key={todo.id}
            data={todo}
            onClick={() =>
              isSameSplitItem(todo.id)
                ? null
                : setCurrentTodo(todo)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default TaskFinderTodo;
